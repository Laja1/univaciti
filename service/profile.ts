import { tesaApplicationRequest } from "@/models/request/profileRequest";
import { baseApi } from "./httpClient/baseApi";
import { tesaApplicationProfilesResponse, tesaApplicationResponse } from "@/models/response/profileResponse";


const controller = 'profile'
export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProfile: builder.mutation<tesaApplicationResponse, tesaApplicationRequest>({
      query: (body) => ({
        url: '/profiles',
        method: 'POST',
        body: body,
      }),
    }),
    getProfile: builder.query<tesaApplicationProfilesResponse, void>({
      query: () => ({
        url: '/profiles',
        method: 'GET',
      }),
    }),
    // getprofileStatus: builder.query<profileStatuResponse, void>({
    //   query: () => ({
    //     url: `/${controller}/status`,
    //     method: 'GET',
    //   }),
    // }),
    
  }),
});

export const {useCreateProfileMutation,useGetProfileQuery} = profileApi;