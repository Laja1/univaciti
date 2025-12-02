export interface tesaApplicationResponse {
    success: boolean;
    message: string;
    data: ProfileData;
  }
  
  export interface ProfileData {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    address: string;
    age: number;
    gender: string;
    email: string;
    phone_number: string;
    country: string;
    university: string;
    degree: string;
    graduation_year: number;
    field_of_study: string;
    gpa: number;
    nysc_status: string;
    company_name: string;
    job_role: string;
    years_of_experience: number;
    specialization: string;
  
    // API returns skills as a stringified array → keep as string
    skills: string;
  
    created_at: string; // ISO timestamp
    updated_at: string; // ISO timestamp
  }

  export interface tesaApplicationProfilesResponse {
    success: boolean;
    message: string;
    data: ProfileData[];
  }