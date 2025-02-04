import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../features/authSlice";

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/user/", credentials: "include" }),
    endpoints: (builder) => {
        return {
            registerUser: builder.mutation({
                query: (inputData) => ({
                    url: "register",
                    method: "POST",
                    body: inputData,
                }),
            }),
            loginUser: builder.mutation({
                query: (inputData) => ({
                    url: "login",
                    method: "POST",
                    body: inputData,
                }),
                async onQueryStarted(_, { queryFulfilled, dispatch }) {
                    try {
                        const result = await queryFulfilled;
                        dispatch(userLoggedIn({ user: result.data.user }));
                    } catch (error) {
                        console.log(error.message);
                    }
                }
            }),
        }
    }
});

export default authApi;
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;