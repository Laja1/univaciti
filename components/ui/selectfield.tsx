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
  register?: string;
  labelClassname?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik?: any;
  options: SelectfieldOptions[];
  hasError?: string;
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
  labelClassname,
  value,
  onChange,
  className,
  disabled,
}: SelectfieldProps) => {
  // Get error and touched state
  const fieldError = formik ? getIn(formik.errors, name) : error;
  const fieldTouched = formik ? getIn(formik.touched, name) : false;

  // Show error only if field is touched and has an error
  const shouldShowError = fieldTouched && fieldError;

  const selectfieldClasses = clsx(
    "block w-full bg-white text-black border rounded-xs py-3 px-3 text-xs focus:outline-none",
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

  // Handle blur to mark field as touched
  const handleBlur = () => {
    if (formik) {
      formik.setFieldTouched(name, true);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={name} className={`text-sm ${labelClassname}`}>
          {label}
        </Label>
      )}
      <div className="relative mt-2 bg-white">
        <Select
          value={value || formik?.values[name] || ""}
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
              className="flex-grow placeholder:text-black"
            />
          </SelectTrigger>
          <SelectContent>
            {options?.map(({ label, value }: SelectfieldOptions) => (
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
