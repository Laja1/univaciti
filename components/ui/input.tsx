"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { FormikProps, getIn } from "formik";
import { Label } from "./label";

type InputExtendedProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik?: FormikProps<any>;
  label?: string;
  name: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  helperLabel?: React.ReactNode;
  onFileSelect?: (file: File) => void;
  acceptedFileTypes?: string[];
  onFileRemove?: () => void;
  maxFileSize?: number;
};

function Input({
  className,
  type,
  formik,
  label,
  name,
  prefixIcon,
  suffixIcon,
  placeholder,
  disabled,
  helperLabel,
  onFileSelect,
  acceptedFileTypes,
  onFileRemove,
  maxFileSize,
  ...props
}: React.ComponentProps<"input"> & InputExtendedProps) {
  const fieldValue = formik?.values?.[name] ?? "";

  // Only show error if field has been touched
  const fieldTouched = getIn(formik?.touched, name);
  const fieldError = getIn(formik?.errors, name);
  const displayError = fieldTouched && fieldError;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileSelect) {
      // Validate file size
      if (maxFileSize && file.size > maxFileSize) {
        alert(`File size exceeds ${maxFileSize / (1024 * 1024)}MB limit`);
        return;
      }

      // Validate file type
      if (acceptedFileTypes && acceptedFileTypes.length > 0) {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        if (!fileExtension || !acceptedFileTypes.includes(fileExtension)) {
          alert(
            `Please upload a valid file type: ${acceptedFileTypes.join(", ")}`
          );
          return;
        }
      }

      onFileSelect(file);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div className="flex items-center justify-between">
          <Label htmlFor={name}>{label}</Label>
          {helperLabel && <div>{helperLabel}</div>}
        </div>
      )}
      <div className="relative">
        {prefixIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {prefixIcon}
          </div>
        )}

        <input
          name={name}
          type={type}
          data-slot="input"
          onBlur={formik?.handleBlur}
          onChange={type === "file" ? handleFileChange : formik?.handleChange}
          value={type === "file" ? undefined : fieldValue}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "file:text-foreground placeholder:text-xs placeholder:text-muted-foreground selection:bg-primary bg-white border-[#E5E5E5] selection:text-primary-foreground dark:bg-input/30 h-11 w-full min-w-0 rounded-lg border  px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            prefixIcon ? "pl-10" : "px-3",
            suffixIcon ? "pr-10" : "pr-3",
            displayError ? "border-red-500" : "",
            className
          )}
          {...props}
        />
        {suffixIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {suffixIcon}
          </div>
        )}
      </div>

      {typeof displayError === "string" && displayError && (
        <p className="text-red-500 text-xs text-left">{displayError}</p>
      )}
    </div>
  );
}

export { Input };
