"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, LogOut } from "./Slices/UserSlice";
import type { RootState } from "./types";
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const url = process.env.REACT_APP_API_KEY;

const baseQuery = fetchBaseQuery({
    baseUrl: url,
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": 'true',
    },
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (
        result?.error?.status === 403 ||
        result?.error?.status === 500 ||
        result?.error?.status === 403
    ) {
        // send refresh token to get new access token
        const refreshResult = await baseQuery(
            "/api/auth/refresh",
            api,
            extraOptions
        );
        if (refreshResult?.data) {
            const user = refreshResult?.data?.user;
            // const user = api.getState().auth.user
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, user }));



            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(LogOut());
            return refreshResult;
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    keepUnusedDataFor: 500,
    tagTypes: ["Comments", "Posts", "Saves", "Auth", "Chat", "Message"],
    endpoints: (builder) => ({}),
});
