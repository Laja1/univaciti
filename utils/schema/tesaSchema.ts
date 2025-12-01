// tesaSchema.ts - Fixed validation
import { array, object, string } from "yup";
import { defaultValidation, emailValidation } from ".";
import { 
  ageOptions, 
  countryOptions, 
  degreeTypes, 
  experienceOptions, 
  fieldsOptions, 
  finalGradeOptions, 
  graduationYears, 
  jobRolesOptions, 
  specializationOptions, 
  universityOptions 
} from "../tesa-application";

const country = countryOptions.map((item) => item.value);

export const personalInformationSchema = object({
  personalInformation: object({
    firstName: defaultValidation('First name'),
    lastName: defaultValidation('Last name'),
    middleName: defaultValidation('Middle name'),
    address: defaultValidation('Address'),
    age: string()
      .oneOf(ageOptions.map((item) => item.value), 'Please select a valid age')
      .required('Age is required'),
    gender: string()
      .oneOf(['Male', 'Female'], 'Please select a valid gender')
      .required('Gender is required'),
    email: emailValidation(),
    phoneNumber: string()
      .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
      .required('Phone number is required'),  
    country: string()
      .oneOf(country, "Please select a valid country")
      .required("Country is required"),
  })
});

export const academicSchema = object({
  academicInformation: object({
    university: string()
      .oneOf(universityOptions.map((item) => item.value), 'Please select a valid university')
      .required('University is required'),
    degree: string()
      .oneOf(degreeTypes.map((item) => item.value), 'Please select a valid degree')
      .required('Degree is required'),
    otherUniversity: string().when("university", {
      is: "Others",
      then: (schema) =>
        schema.required("Please enter your university name").min(2, "University name is too short"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    otherDegree: string().when("degree", {
      is: "Others",
      then: (schema) =>
        schema.required("Please enter your degree").min(2, "Degree name is too short"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    otherFieldOfStudy: string().when("fieldOfStudy", {
      is: "Others",
      then: (schema) =>
        schema.required("Please enter your field of study").min(2, "Field of study is too short"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    graduationYear: string()
      .oneOf(graduationYears.map((item) => item.value), 'Please select a valid graduation year')
      .required('Graduation year is required'),
    fieldOfStudy: string()
      .oneOf(fieldsOptions.map((item) => item.value), 'Please select a valid field of study')
      .required('Field of study is required'),
    gpa: string()
      .oneOf(finalGradeOptions.map((item) => item.value), 'Please select a valid GPA')
      .required('Final GPA is required'),
    nysc: string()
      .oneOf(['Yes', 'No'], 'Please select NYSC status')
      .required('NYSC status is required'),
  })
});

export const workExperienceSchema = object({
  workExperience: object({
    jobRole: string()
      .oneOf(
        [...jobRolesOptions.map((item) => item.value), ""],
        "Please select a valid job role"
      )
      .required("Job role is required"),
    companyName: string().when("jobRole", {
      is: (value: string) => value && value !== "",
      then: (schema) => defaultValidation("Company name"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    yearsOfExperience: string().when("jobRole", {
      is: (value: string) => value && value !== "",
      then: (schema) =>
        schema
          .oneOf(
            experienceOptions.map((item) => item.value),
            "Please select valid years of experience"
          )
          .required("Years of experience is required"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    otherJobRole: string().when("jobRole", {
      is: "Others",
      then: (schema) =>
        schema.required("Please enter your job role").min(2, "Job role is too short"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
  })
});

export const skillsSchema = object({
  skillsInformation: object({
    specialization: string()
      .oneOf(
        specializationOptions.map((item) => item.value),
        "Please select a valid specialization"
      )
      .required("Specialization is required"),
    skills: array()
      .of(string())
      .min(1, "Please select at least one skill")
      .required("Skills are required"),
  })
});