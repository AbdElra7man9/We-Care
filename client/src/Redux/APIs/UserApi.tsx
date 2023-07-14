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
                method: 'GET'
            }),
            providesTags: ['Auth'],
        }),
        updateUserInfo: builder.mutation<{ user: userType, message: string }, { username?: string, summary?: string, profilePicture?: string, gender?: string; email?: string, specialization?: string, bio?: string, name?: string }>({
            query: ({ username, specialization, profilePicture, summary, email, name, bio, gender }) => ({
                url: `/api/v1/users/updateInfo`,
                method: 'PATCH',
                body: { username, specialization, email, name, bio, profilePicture, summary, gender },
            }),
        }),
        DeleteMe: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: `/api/v1/users/deleteMe`,
                method: 'DELETE',
            }),
        }),
    }),

});

export const {
    useSearchQuery,
    useGetUserByIdQuery,
    useDeleteMeMutation,
    useUpdateUserInfoMutation,
} = UserApi;
