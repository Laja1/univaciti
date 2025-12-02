export interface tesaApplicationRequest {
    personalInformation: {
      firstName: string;
      lastName: string;
      middleName: string;
      address:string
      age: string; 
      gender: "Male" | "Female";
      email: string;
      phoneNumber: string;
      country: string;
    };
  
    academicInformation: {
      university: string;
      otherUniversity?: string | null;
  
      degree: string;
      otherDegree?: string | null;
  
      graduationYear: string;
  
      fieldOfStudy: string;
      otherFieldOfStudy?: string | null;
      gpa: string;
      nysc: "Yes" | "No";
    };
  
    workExperience: {
      workExperience: "Yes" | "No";
      companyName: string;
      jobRole: string;
      otherJobRole?: string | null;
      yearsOfExperience: string;
    };
  
    skillsInformation: {
      specialization: string;
      skills: string[];
    };
  }
  