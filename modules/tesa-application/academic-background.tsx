/* eslint-disable @typescript-eslint/no-explicit-any */
import { SegmentedControl } from "@/components/shared/SegmentedButton";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/ui/selectfield";
import { useStepper } from "@/store/stepper";
import {
  degreeTypes,
  fieldsOptions,
  finalGradeOptions,
  graduationYears,
  universityOptions,
} from "@/utils/tesa-application";
import { FormikProps } from "formik";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const AcademicBackground = ({
  formik,
}: {
  formik: FormikProps<any>;
}) => {
  // university: "",
  // degree: "",
  // nysc: "",
  // field: "",
  // graduationYear: "",
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-8 items-start">
        <SelectField
          name="university"
          label="University/Institution attended"
          placeholder="Select university"
          options={universityOptions}
          formik={formik}
        />
        <SelectField
          name="degree"
          label="Degree Obtained"
          placeholder="Select degree"
          options={degreeTypes}
          formik={formik}
        />
        <SelectField
          name="graduationYear"
          label="Year of graduation"
          placeholder="Select year of graduation"
          options={graduationYears}
          formik={formik}
        />
        <SelectField
          name="fieldOfStudy"
          label="Field of study"
          placeholder="Select field of study"
          options={fieldsOptions}
          formik={formik}
        />
        <SelectField
          name="gpa"
          label="Final GPA/Grade"
          placeholder="Select grade"
          options={finalGradeOptions}
          formik={formik}
        />
        <SegmentedControl
          label="Have you completed NYSC?"
          value={formik.values.nysc}
          options={["Yes", "No"]}
          onChange={(val) => formik.setFieldValue("nysc", val)}
        />
      </div>
    </div>
  );
};
