'use client';
import { iTimeBlock } from '@lib/types/timeBlock';
import { apiSlice } from '../ApiSlice';

export const TimeBlockApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        NewPaymentSession: builder.mutation<{ session: { id: string; url: string }, pastAppointment: iTimeBlock[] }, { appointmentId: string }>({
            query: ({ appointmentId }) => ({
                url: `/api/v1/bookings/checkoutsession/${appointmentId}`,
                method: 'POST',
            }),
        }),
        OnSuccess: builder.mutation<{ status: string }, { appointmentId: string, sessionId: string, comment: string }>({
            query: ({ appointmentId, sessionId, comment }) => ({
                url: `/api/v1/bookings/BookingCheckout`,
                method: 'POST',
                body: { appointmentId, sessionId, comment }
            }),
        }),

    }),
});

export const {
    useNewPaymentSessionMutation,
    useOnSuccessMutation
} = TimeBlockApi;
