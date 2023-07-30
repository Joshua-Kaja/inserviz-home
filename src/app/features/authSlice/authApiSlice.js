import { apiSlice } from "../../api/apiSlice";

export const authApilice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginAuth: builder.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: { ...data },
      }),
    }),
    signUpAuth: builder.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginAuthMutation, useSignUpAuthMutation } = authApilice;
