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
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import {
  academicSchema,
  personalInformationSchema,
  skillsSchema,
  workExperienceSchema,
} from "@/utils/schema/tesaSchema";

export const TesaApplicationForm = () => {
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
  ];

  const getCurrentValidation = () => {
    if (step === 0) return null;
    return stepIndicators[step - 1]?.validation || null;
  };

  const formik = useFormik({
    initialValues: {
      personalInfo: {
        gender: "",
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        middleName: "",
        country: "",
        age: "",
      },
      academicInfo: {
        fieldOfStudy: "",
        university: "",
        degree: "",
        gpa: "",
        graduationYear: "",
        nysc: "",
      },
      workExperience: {
        companyName: "",
        jobRole: "",
        employed: "",
        yearsOfExperience: "",
      },
      skills: [] as string[],
    },
    onSubmit: (values) => console.log("Form submitted:", values),
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
        "firstName",
        "lastName",
        "middleName",
        "gender",
        "email",
        "phoneNumber",
        "age",
        "country",
        "address",
      ],
      2: [
        "fieldOfStudy",
        "university",
        "degree",
        "gpa",
        "graduationYear",
        "nyscs",
      ],
      3: ["companyName", "jobRole", "employed", "yearsOfExperience"],
      4: ["skills"],
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
    if (step < 4) setStep(step + 1);
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

  console.log(formik.errors);

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
              <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-8 lg:py-12 pb-32">
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
                    disabled={!isCurrentStepValid()}
                  >
                    Submit Application
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
