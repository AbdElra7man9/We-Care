'use client';
import { iTimeBlock } from '@lib/types/timeBlock';
import { apiSlice } from '../ApiSlice';

export const TimeBlockApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetTimeBlock: builder.query<{ TimeBlocks: iTimeBlock[] }, void>({
            query: () => ({
                url: '/api/v1/timeBlocks',
                method: 'GET',
            }),
            providesTags: ['TimeBlock']
        }),
        GetTimeBlockByDocId: builder.query<{ TimeBlocks: iTimeBlock[] }, { username: string }>({
            query: ({ username }) => ({
                url: `/api/v1/TimeBlock/${username}`,
                method: 'GET',
            }),
            providesTags: ['TimeBlock']
        }),
        NewTimeBlock: builder.mutation<iTimeBlock, { startTime: string; period?: number; type: string }>({
            query: ({ startTime, period, type }) => ({
                url: '/api/v1/timeBlocks',
                method: 'POST',
                body: { startTime, period, type }
            }),
            invalidatesTags: ['TimeBlock'],

        }),

    }),
});

export const {

    useNewTimeBlockMutation,
    useGetTimeBlockQuery,
    useGetTimeBlockByDocIdQuery,
} = TimeBlockApi;
