import { object, string } from "yup";
import { emailValidation, passwordValidation } from ".";

export const adminInitiateLoginSchema = object({
 adminEmail: emailValidation(),
});

export const adminCompleteLoginSchema = object({
  otp: string().min(6, "OTP must be 6 digits").required("OTP is required"),
  password: string().required(),
});

export const userInitiateLoginSchema = object({
  userEmail: emailValidation(),
});

;

export const secondTimeCompleteLoginSchema = object({
  password: passwordValidation(),
});
