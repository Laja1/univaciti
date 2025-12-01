/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/ui/selectfield";
import { ageOptions, countryOptions } from "@/utils/tesa-application";
import { FormikProps } from "formik";
import { Mail, MapPin, Phone, User } from "lucide-react";

export const PersonalInformation = ({
  formik,
}: {
  formik: FormikProps<any>;
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-3">
        <Input
          name="personalInformation.firstName"  // Changed
          label="First Name"
          placeholder="First Name"
          prefixIcon={<User size={16} />}
          formik={formik}
        />

        <Input
          name="personalInformation.lastName"  // Changed
          label="Last Name"
          placeholder="Last Name"
          prefixIcon={<User size={16} />}
          formik={formik}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-3 items-start">
        <Input
          name="personalInformation.middleName"  // Changed
          label="Middle Name"
          placeholder="Middle Name"
          prefixIcon={<User size={16} />}
          formik={formik}
        />
        <SelectField
          name="personalInformation.gender"  // Changed
          label="Gender"
          placeholder="Gender"
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          formik={formik}
        />
      </div>
      <div className="w-full gap-3 items-start">
        <Input
          name="personalInformation.email"  // Changed
          label="Email address"
          placeholder="name@email.com"
          prefixIcon={<Mail size={16} />}
          formik={formik}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-3 items-start">
        <Input
          name="personalInformation.phoneNumber"  // Changed
          label="Phone Number"
          type="tel"
          placeholder="01234567890"
          prefixIcon={<Phone size={16} />}
          formik={formik}
        />
        <SelectField
          name="personalInformation.age"  // Changed
          label="Age"
          placeholder="Select age"
          options={ageOptions}
          formik={formik}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-3 items-start">
        <SelectField
          name="personalInformation.country"  // Changed
          label="Country"
          placeholder="Select country"
          options={countryOptions}
          formik={formik}
        />

        <Input
          name="personalInformation.address"  // Changed
          label="Residential Address"
          placeholder="Enter residential Address"
          prefixIcon={<MapPin size={16} />}
          formik={formik}
        />
      </div>
    </div>
  );
};