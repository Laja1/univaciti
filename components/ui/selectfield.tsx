"use client";
import clsx from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "./label";
import { getIn } from "formik";

export interface SelectfieldOptions {
  label: React.ReactNode;
  value: string;
}

export type SelectfieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  formik?: any;
  options: SelectfieldOptions[];
  error?: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export const SelectField = ({
  error,
  placeholder,
  label,
  name,
  formik,
  options,
  value,
  onChange,
  className,
  disabled,
}: SelectfieldProps) => {

  // 🔥 Use getIn for nested value paths
  const formikValue = formik ? getIn(formik.values, name) : value;

  const fieldError = formik ? getIn(formik.errors, name) : error;
  const fieldTouched = formik ? getIn(formik.touched, name) : false;

  const shouldShowError = fieldTouched && fieldError;

  const selectfieldClasses = clsx(
    "block w-full bg-white text-black border rounded-lg py-3 px-3 text-xs focus:outline-none",
    shouldShowError ? "border-red-500" : "border-gray-300",
    className
  );

  const handleChange = (selectedValue: string) => {
    if (onChange) {
      onChange(selectedValue);
    } else if (formik) {
      formik.setFieldValue(name, selectedValue);
    }
  };

  const handleBlur = () => {
    if (formik) {
      formik.setFieldTouched(name, true);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={name} className="text-sm">
          {label}
        </Label>
      )}

      <div className="relative mt-0.5 bg-white">
        <Select
          value={formikValue || ""}
          onValueChange={handleChange}
          disabled={disabled}
        >
          <SelectTrigger
            id={name}
            onBlur={handleBlur}
            className={clsx(
              selectfieldClasses,
              "cursor-pointer flex items-center justify-between"
            )}
          >
            <SelectValue
              placeholder={placeholder || "Select an option"}
            />
          </SelectTrigger>

          <SelectContent>
            {options.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {shouldShowError && (
        <p className="text-red-500 text-xs text-left mt-1">{fieldError}</p>
      )}
    </div>
  );
};
