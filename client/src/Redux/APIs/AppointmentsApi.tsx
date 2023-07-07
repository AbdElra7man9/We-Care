'use client';
import { iAppointments } from '@lib/types/appointment';
import { BlogType } from '@lib/types/blog';
import { apiSlice } from '../ApiSlice';

export const BlogsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetAppointments: builder.query<{ upcomingApointments: iAppointments[], pastAppointment: iAppointments[] }, void>({
            query: () => ({
                url: `/api/v1/appointments`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetAvailableDoctorAppointments: builder.query<{ availableAppointments: iAppointments[] }, { doctorId: string }>({
            query: ({ doctorId }) => ({
                url: `/api/v1/appointments/available/${doctorId}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetAvailableDoctorAppointmentsByDay: builder.query<{ availableAppointmentsByDay: iAppointments }, { appointmentId: number, day: string }>({
            query: ({ appointmentId, day }) => ({
                url: `/api/v1/appointments/availableByday/${appointmentId}`,
                method: 'GET',
                body: { day }
            }),
            providesTags: ['Appointments']
        }),

        BookAppointments: builder.mutation<{ appointment: iAppointments, messsage: string }, { AppointmentID: string }>({
            query: ({ AppointmentID }) => ({
                url: '/api/v1/appointments/book',
                method: 'POST',
                body: { AppointmentID },
            }),
            invalidatesTags: ['Appointments'],

        }),

    }),
});

export const {

    useBookAppointmentsMutation,
    useGetAppointmentsQuery,
    useGetAvailableDoctorAppointmentsByDayQuery,
    useGetAvailableDoctorAppointmentsQuery,
} = BlogsApi;
