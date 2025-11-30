/* eslint-disable @typescript-eslint/no-explicit-any */
import { SegmentedControl } from "@/components/shared/SegmentedButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/ui/selectfield";
import { useStepper } from "@/store/stepper";
import { experienceOptions, jobRolesOptions } from "@/utils/tesa-application";
import { FormikProps, useFormik } from "formik";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

export const WorkExperience = ({ formik }: { formik: FormikProps<any> }) => {
  const { setStep, step } = useStepper();

  console.log(formik.values.employed, "ddd");
  return (
    <div className="w-full flex flex-col gap-6">
      <SegmentedControl
        label="Are you currently employed?"
        value={formik.values.employed}
        options={["Yes", "No"]}
        onChange={(val) => formik.setFieldValue("employed", val)}
      />

      {formik.values.employed === "Yes" && (
        <div className="flex flex-col gap-3">
          <Input
            name="companyName"
            label="Company nam"
            placeholder="Enter company nam"
            prefixIcon={<User size={16} />}
            formik={formik}
          />
          <SelectField
            name="jobRole"
            label="Job role"
            placeholder="jobRole"
            options={jobRolesOptions}
            formik={formik}
          />
          <SelectField
            name="yearsOfExperience"
            label="Years of experience"
            placeholder="Select years of experience"
            options={experienceOptions}
            formik={formik}
          />
        </div>
      )}
    </div>
  );
};
