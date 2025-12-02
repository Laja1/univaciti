export type VirtualAccountResponse = {
    success: boolean;
    message: string;
    data: {
      accountNumber: string;
      accountName: string;
      accountParent: string;
      accountCustomerId: string;
      responseCode: string;
      responseMessage: string;
      reference:string
    };
  };
  
  export type paymentStatusResponse = {
    success: boolean;
    message: string;
    data: {
      id: number;
      email: string;
      contractReference: string;
      amountCharged: number;
      amountReceived: number;
      status: "pending" | "successful" | "failed"; // add more if needed
      created_at: string;
      updated_at: string;
    };
  };
  