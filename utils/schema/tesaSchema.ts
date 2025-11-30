import { number, object, string } from "yup";
import { defaultValidation, emailValidation } from ".";
import { ageOptions, countryOptions, degreeTypes, fieldsOptions, finalGradeOptions, graduationYears, universityOptions } from "../tesa-application";

const country = countryOptions.map((item)=>item.value)
export const personalInformationSchema = object({
    firstName:defaultValidation('First name'),
    lastName:defaultValidation('Last name'),
    middleName: defaultValidation('Middle name'),
    address: defaultValidation('Address'),
    age: string()
      .oneOf(ageOptions.map((item) => item.value), 'Invalid Age')
      .required('Age is required'),
    gender: string()
    .oneOf(['Male', 'Female'], 'Invalid gender')
    .required('Gender is required'),
    email: emailValidation(),
    phoneNumber: string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 11 digits')
    .required('Phone number is required'),  
    country: string()
      .oneOf(country, 'Invalid Country')
      .required('Country is required'),
  });
  
  export const academicSchema = object({
    university:string()
    .oneOf(universityOptions.map((item)=>item.value), 'Invalid unversity')
    .required('University is required'),
    degree:string()
    .oneOf(degreeTypes.map((item)=>item.value), 'Invalid degree')
    .required('Degree is required'),
    graduationYear:string()
    .oneOf(graduationYears.map((item)=>item.value), 'Invalid graduation year')
    .required('Graduation year is required'),
    fieldOfStudy:string()
    .oneOf(fieldsOptions.map((item)=>item.value), 'Invalid field of study')
    .required('Field of study is required'),
    gpa:string()
    .oneOf(finalGradeOptions.map((item)=>item.value), 'Invalid final GPA')
    .required('Final GPA is required'),
    nysc:string()
    .oneOf(['Yes','No'], 'Invalid nysc option')
    .required('Final GPA is required'),
  })


  export const workExperienceSchema = object({
    firstName:defaultValidation('First name'),
    lastName:defaultValidation('Last name'),
    middleName:defaultValidation('Middle name'),
  });


  export const skillsSchema = object({
    firstName:defaultValidation('First name'),
    lastName:defaultValidation('Last name'),
    middleName:defaultValidation('Middle name'),
  });