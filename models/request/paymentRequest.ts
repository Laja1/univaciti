export type createVirtualAccount = {
    first_name: string;
    email: string;
    last_name: string;
    amount: string; // or number if backend expects number
  };

  export type paymentStatusRequest = {
    email: string;
    reference: string;
  };
  