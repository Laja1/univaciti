/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useStepper } from "@/store/stepper";
import { motion } from "framer-motion";
import { Index } from "@/modules/tesa-application";
import { PersonalInformation } from "@/modules/tesa-application/personal-information";
import { AcademicBackground } from "@/modules/tesa-application/academic-background";
import { StepIndicator } from "./shared/StepIndicator";
import { StepperLayout } from "./layout/StepperLayout";
import { WorkExperience } from "@/modules/tesa-application/work-experience";
import { Skills } from "@/modules/tesa-application/skills";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info } from "lucide-react";
import { toast } from "sonner";
import {
  academicSchema,
  personalInformationSchema,
  skillsSchema,
  workExperienceSchema,
} from "@/utils/schema/tesaSchema";
import PaymentOptions from "@/modules/tesa-application/payment-option";
import { useCreateProfileMutation } from "@/service/profile";
import { tesaApplicationRequest } from "@/models/request/profileRequest";
import { useProfileStore } from "@/store/profile";
import { ErrorHandler } from "@/service/httpClient/errorHandler";
import { QucoonLogo } from "@/public/svgs/qucoon-logo";

export const TesaApplicationForm = () => {
  const [createProfile, { isLoading }] = useCreateProfileMutation();
  const {
    setFirstName,
    setEmail,
    setLastName,
    setId,
    firstName,
    lastName,
    email,
  } = useProfileStore();
  const { step, setStep } = useStepper();

  const stepIndicators = [
    {
      id: 1,
      title: "Personal Information",
      validation: personalInformationSchema,
    },
    { id: 2, title: "Academic Background", validation: academicSchema },
    { id: 3, title: "Work Experience", validation: workExperienceSchema },
    { id: 4, title: "Skills & Certification", validation: skillsSchema },
    { id: 5, title: "Payment" },
  ];

  const getCurrentValidation = () => {
    if (step === 0) return null;
    return stepIndicators[step - 1]?.validation || null;
  };

  // Update the initial values structure
  const formik = useFormik({
    initialValues: {
      personalInformation: {
        firstName: "",
        lastName: "",
        middleName: "",
        address: "",
        age: "",
        gender: "",
        email: "",
        phoneNumber: "",
        country: "",
      },
      academicInformation: {
        fieldOfStudy: "",
        university: "",
        degree: "",
        gpa: "",
        graduationYear: "",
        nysc: "",
        otherUniversity: "",
        otherDegree: "",
        otherFieldOfStudy: "",
      },
      workExperience: {
        workExperience: "",
        companyName: "",
        jobRole: "",
        yearsOfExperience: "",
        otherJobRole: "",
      },
      skillsInformation: {
        specialization: "",
        skills: [],
      },
    },
    onSubmit: async (values) => {
      try {
        const payload: tesaApplicationRequest = {
          personalInformation: {
            firstName: values.personalInformation.firstName,
            lastName: values.personalInformation.lastName,
            middleName: values.personalInformation.middleName,
            address: values.personalInformation.address,
            age: values.personalInformation.age,
            gender: values.personalInformation.gender as "Male" | "Female",
            email: values.personalInformation.email,
            phoneNumber: values.personalInformation.phoneNumber,
            country: values.personalInformation.country,
          },
          academicInformation: {
            university: values.academicInformation.university,
            otherUniversity: values.academicInformation.otherUniversity || null,
            degree: values.academicInformation.degree,
            otherDegree: values.academicInformation.otherDegree || null,
            graduationYear: values.academicInformation.graduationYear,
            fieldOfStudy: values.academicInformation.fieldOfStudy,
            otherFieldOfStudy:
              values.academicInformation.otherFieldOfStudy || null,
            gpa: values.academicInformation.gpa,
            nysc: values.academicInformation.nysc as "Yes" | "No",
          },
          workExperience: {
            workExperience: values.workExperience.workExperience as
              | "Yes"
              | "No",
            companyName: values.workExperience.companyName,
            jobRole: values.workExperience.jobRole,
            otherJobRole: values.workExperience.otherJobRole || null,
            yearsOfExperience: values.workExperience.yearsOfExperience,
          },
          skillsInformation: {
            specialization: values.skillsInformation.specialization,
            skills: values.skillsInformation.skills,
          },
        };
        console.log(payload, "payload");
        const res = await createProfile(payload).unwrap();
        await setFirstName(values.personalInformation.firstName);
        await setEmail(values.personalInformation.email);
        await setLastName(values.personalInformation.lastName);
        await setId(res?.data?.id);

        setStep(5);
        toast.success(res?.message);
      } catch (error) {
        console.error(error);
        toast.error(ErrorHandler.extractMessage(error), {
          position: "top-right",
        });
      }
    },
    enableReinitialize: true,
    validationSchema: getCurrentValidation(),
  });

  const displayValidationErrors = (errors: any) => {
    const firstError = Object.values(errors)[0];
    if (typeof firstError === "string") toast.error(firstError);
  };

  const touchAllFields = () => {
    // Only touch fields relevant to current step
    const stepFieldMap: Record<number, string[]> = {
      1: [
        "personalInformation.firstName",
        "personalInformation.lastName",
        "personalInformation.middleName",
        "personalInformation.gender",
        "personalInformation.email",
        "personalInformation.phoneNumber",
        "personalInformation.otherUniversity",
        "personalInformation.otherDegree",
        "personalInformation.otherFieldOfStudy",
        "personalInformation.age",
        "personalInformation.country",
        "personalInformation.address",
      ],
      2: [
        "academicInformation.fieldOfStudy",
        "academicInformation.university",
        "academicInformation.degree",
        "academicInformation.gpa",
        "academicInformation.graduationYear",
        "academicInformation.nysc",
        "academicInformation.otherUniversity",
        "academicInformation.otherDegree",
        "academicInformation.otherFieldOfStudy",
      ],
      3: [
        "workExperience.companyName",
        "workExperience.jobRole",
        "workExperience.workExperience",
        "workExperience.yearsOfExperience",
        "workExperience.otherJobRole",
      ],
      4: ["skillsInformation.skills", "skillsInformation.specialization"],
    };

    const fieldsToTouch = stepFieldMap[step] || [];
    const touched = fieldsToTouch.reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, {} as any);

    formik.setTouched(touched, true);
  };

  const handleNext = async () => {
    touchAllFields();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) return displayValidationErrors(errors);

    // Don't auto-advance to step 5, let them click "Next" to get there
    if (step < 4) setStep(step + 1); // Changed from 5 to 4
  };

  const handlePrevious = () => step > 1 && setStep(step - 1);

  // Check if current step is valid
  const isCurrentStepValid = () => {
    if (step === 0) return true;

    // Check if there are any errors in formik
    const hasErrors = Object.keys(formik.errors).length > 0;

    // Check if form has been touched/interacted with
    const hasTouched = Object.keys(formik.touched).length > 0;

    // Validate based on current step
    return !hasErrors && formik.isValid;
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <StepIndicator steps={stepIndicators} />

      <div className="flex-1 w-full lg:w-[70%] overflow-hidden">
        {step === 0 && <Index />}

        {step === 1 && (
          <StepperLayout
            title="Let's get to know you better!"
            subtitle="To tailor your learning experience, we'll need a few key details."
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            showPrevious={false}
            disabled={!isCurrentStepValid()}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <PersonalInformation formik={formik} />
            </motion.div>
          </StepperLayout>
        )}

        {step === 2 && (
          <StepperLayout
            title="Tell us about your academic background!"
            subtitle="We'd love to know more about your educational history"
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            showPrevious={true}
            disabled={!isCurrentStepValid()}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <AcademicBackground formik={formik} />
            </motion.div>
          </StepperLayout>
        )}

        {step === 3 && (
          <StepperLayout
            title="Tell us about your work experience"
            subtitle="We'd love to know more about your work experience."
            handleNext={handleNext}
            showPrevious={true}
            handlePrevious={handlePrevious}
            disabled={!isCurrentStepValid()}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <WorkExperience formik={formik} />
            </motion.div>
          </StepperLayout>
        )}
        {step === 4 && (
          <div className="flex flex-col w-full h-screen">
            <div className="flex-1 overflow-y-auto">
              <div className="w-full max-w-3xl mx-auto px-6 lg:px-10 py-8 mt-10 lg:pt-10 lg:mb-32 pb-32">
                <div className="mb-8 lg:mb-12">
                  <h1 className="font-bold text-2xl lg:text-3xl text-gray-900 mb-2">
                    Skills & Certifications
                  </h1>
                  <p className="text-gray-600 text-sm lg:text-base">
                    We&apos;d love to know more about your skillsets &
                    certifications
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Skills formik={formik as any} />
                </motion.div>
              </div>
            </div>

            {/* CUSTOM FOOTER FOR FINAL STEP */}
            <div className="fixed bottom-0 left-0 lg:left-[30%] right-0 bg-white border-t border-gray-200 ">
              <div className="w-full mx-auto px-6 lg:px-12 py-5">
                <div className="flex justify-between items-center">
                  <Button
                    onClick={handlePrevious}
                    variant={"secondary"}
                    prefixIcon={<ArrowLeft />}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => formik.handleSubmit()}
                    loading={isLoading}
                    disabled={!isCurrentStepValid()}
                  >
                    Submit Application
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col w-full h-screen">
            <div className="flex-1 overflow-y-auto">
              <div className="w-full max-w-3xl mx-auto px-6 lg:px-10  mt-10 lg:pt-10 lg:mb-5 pb-12">
                <div className="flex justify-between items-start gap-6 mb-6">
                  <div className="flex-1">
                    <h1 className="font-bold text-2xl lg:text-3xl text-gray-900 mb-2">
                      Choose Payment Plan
                    </h1>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {" "}
                      Select your preferred payment option. You&apos;ll only be
                      charged after an official acceptance into cohort.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <QucoonLogo />
                  </div>
                </div>
                <div className="w-full bg-red-50 border flex gap-2 border-dashed border-red-600 text-red-800 px-4 py-3 rounded-lg">
                  <Info />
                  <p className="text-sm font-medium">
                    Select your preferred payment option. You&apos;ll only be
                    charged after an official acceptance into cohort.
                  </p>
                </div>
                <div className="w-full ">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <PaymentOptions />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
