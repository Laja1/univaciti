/* eslint-disable @typescript-eslint/no-explicit-any */
import { SegmentedControl } from "@/components/shared/SegmentedButton";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/ui/selectfield";
import { experienceOptions, jobRolesOptions } from "@/utils/tesa-application";
import { FormikProps, useFormik } from "formik";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

export const WorkExperience = ({ formik }: { formik: FormikProps<any> }) => {

  console.log(formik.values.workExperience, "ddd");
  return (
    <div className="w-full flex flex-col gap-6">
      <SegmentedControl
        label="Are you currently employed?"
        value={formik.values.workExperience}
        options={["Yes", "No"]}
        onChange={(val) => formik.setFieldValue("workExperience", val)}
      />

      {formik.values.workExperience === "Yes" && (
        <div className="flex flex-col gap-3">
          <Input
            name="companyName"
            label="Company name"
            placeholder="Enter company name"
            prefixIcon={<User size={16} />}
            formik={formik}
          />
          <SelectField
            name="jobRole"
            label="Job role"
            placeholder="Select job role"
            options={jobRolesOptions}
            formik={formik}
          />
          {formik.values.jobRole === "Others" && (
            <Input
              name="otherJobRole"
              label="Other job role"
              placeholder="Enter other job role"
              prefixIcon={<User size={16} />}
              formik={formik}
            />
          )}
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
