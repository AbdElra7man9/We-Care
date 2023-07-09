'use client';
import { iAppointments } from '@lib/types/appointment';
import { apiSlice } from '../ApiSlice';

export const AppointmentApi = apiSlice.injectEndpoints({
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
        GetAvailableDays: builder.query<{ availableDayes: string[] }, { doctorId: string }>({
            query: ({ doctorId }) => ({
                url: `/api/v1/appointments/availabledays/${doctorId}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetBookedAppointments: builder.query<{ availableAppointments: iAppointments[] }, { doctorId: string }>({
            query: ({ doctorId }) => ({
                url: `/api/v1/appointments/availabledays/${doctorId}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetAvailableDoctorAppointmentsByDay: builder.query<{ availableAppointmentsByDay: iAppointments }, { doctorId: string, day: string }>({
            query: ({ doctorId, day }) => ({
                url: `/api/v1/appointments/availableByday/${doctorId}`,
                method: 'GET',
                body: { day }
            }),
            providesTags: ['Appointments']
        }),

        BookAppointments: builder.mutation<{ appointment: iAppointments, messsage: string }, { AppointmentID: string, comment :string}>({
            query: ({ AppointmentID, comment }) => ({
                url: '/api/v1/appointments/book',
                method: 'POST',
                body: { AppointmentID, comment },
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
    useGetAvailableDaysQuery,
    useGetBookedAppointmentsQuery,
} = AppointmentApi;
