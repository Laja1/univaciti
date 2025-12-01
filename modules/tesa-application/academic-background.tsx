/* eslint-disable @typescript-eslint/no-explicit-any */
"use cl"
import { SegmentedControl } from "@/components/shared/SegmentedButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { ArrowLeft, ArrowRight, Book, GraduationCap, University } from "lucide-react";

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
          name="academicInformation.university"
          label="University/Institution attended"
          placeholder="Select university"
          options={universityOptions}
          formik={formik}
        />
       {formik.values.university === "Others" && (
        <Input
          name="academicInformation.otherUniversity"
          label="Your institution not on the list? Add manually"
          placeholder="Enter university name"
          prefixIcon={<University size={16} />}
          formik={formik}
        />
       )}
        <SelectField
          name="academicInformation.degree"
          label="Degree Obtained"
          placeholder="Select degree"
          options={degreeTypes}
          formik={formik}
        />
        {formik.values.degree === "Others" && (
          <Input
            name="academicInformation.otherDegree"
            label="Your degree not on the list? Add manually"
            placeholder="Enter degree name"
            prefixIcon={<GraduationCap size={16} />}
            formik={formik}
          />
        )}
        <SelectField
          name="academicInformation.graduationYear"
          label="Year of graduation"
          placeholder="Select year of graduation"
          options={graduationYears}
          formik={formik}
        />
        <SelectField
          name="academicInformation.fieldOfStudy"
          label="Field of study"
          placeholder="Select field of study"
          options={fieldsOptions}
          formik={formik}
        />
        {formik.values.fieldOfStudy === "Others" && (
          <Input
            name="academicInformation.otherFieldOfStudy"
            label="Your field of study not on the list? Add manually"
            placeholder="Enter field of study name"
            prefixIcon={<Book size={16} />}
            formik={formik}
          />
        )}
        <SelectField
          name="academicInformation.gpa"
          label="Final GPA/Grade"
          placeholder="Select grade"
          options={finalGradeOptions}
          formik={formik}
        />
        <SegmentedControl
          label="Have you completed NYSC?"
          value={formik.values.academicInformation.nysc}
          options={["Yes", "No"]}
          onChange={(val) => formik.setFieldValue("nysc", val)}
        />
      </div>
    </div>
  );
};
