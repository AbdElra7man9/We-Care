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
        updateUserInfo: builder.mutation<{ user: userType, message: string }, { username?: string, email?: string, specialization?: string, bio?: string, name?: string }>({
            query: ({ username, specialization, email, name, bio }) => ({
                url: `/api/v1/users/updateInfo`,
                method: 'PUT',
                body: { username, specialization, email, name, bio },
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
