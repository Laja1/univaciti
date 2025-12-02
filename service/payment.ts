import { baseApi } from "./httpClient/baseApi";
import { paymentStatusResponse, VirtualAccountResponse } from "@/models/response/paymentResponse";
import { createVirtualAccount, paymentStatusRequest } from "@/models/request/paymentRequest";


const controller = 'payment'
export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    payNow: builder.mutation<VirtualAccountResponse, createVirtualAccount>({
      query: (body) => ({
        url: `/${controller}/pay-now`,
        method: 'POST',
        body: body,
      }),
    }),
    // getpaymentStatus: builder.query<paymentStatuResponse, void>({
    //   query: () => ({
    //     url: `/${controller}/status`,
    //     method: 'GET',
    //   }),
    // }),
    paymentStatus: builder.mutation<paymentStatusResponse, paymentStatusRequest>({
      query: (body) => ({
        url: `/${controller}/status`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {usePayNowMutation,usePaymentStatusMutation} = paymentApi;