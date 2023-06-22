'use client';
import { userType } from '@lib/types/user';
import { apiSlice } from '../ApiSlice';
export const UserApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        Search: builder.query({
            query: ({ keyword, pagnum }) => ({
                url: `/api/user/search?keyword=${keyword}&page=${pagnum}`,
                method: 'GET',
                credentials: 'include',
            }),
            providesTags: ['Auth'],
        }),
        getUserById: builder.query<{ status: string; user: userType }, { username: string }>({
            query: ({ username }) => ({
                url: `/api/v1/users/${username}`,
                method:'GET'
            }),
            providesTags: ['Auth'],
        })
    }),

});

export const {
    useSearchQuery,
    useGetUserByIdQuery,
} = UserApi;
