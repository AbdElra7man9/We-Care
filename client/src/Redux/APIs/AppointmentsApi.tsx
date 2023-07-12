'use client';
import { iAppointments } from '@lib/types/appointment';
import { apiSlice } from '../ApiSlice';

export const AppointmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetAppointments: builder.query<{ upcomingApointments: iAppointments[], pastAppointment: iAppointments[] }, { page?: number; limit?: number }>({
            query: ({ page, limit }) => ({
                url: `/api/v1/appointments?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetAvailableDoctorAppointments: builder.query<{ availableAppointments: iAppointments[] }, { doctorId: string, page?: number; limit?: number }>({
            query: ({ doctorId, page, limit }) => ({
                url: `/api/v1/appointments/available/${doctorId}?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetAvailableDays: builder.query<{ availableDayes: string[] }, { doctorId: string, page?: number; limit?: number }>({
            query: ({ doctorId, page, limit }) => ({
                url: `/api/v1/appointments/availabledays/${doctorId}?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetBookedAppointments: builder.query<{ myBookedAppointments: iAppointments[] }, { page?: number; limit?: number }>({
            query: ({ page, limit }) => ({
                url: `/api/v1/appointments/MyBooked?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetAllMyAppointments: builder.query<{ pastAppointment: iAppointments[], upcomingApointments: iAppointments[] }, { page?: number; limit?: number }>({
            query: ({ page, limit }) => ({
                url: `/api/v1/appointments?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Appointments']
        }),
        GetAvailableDoctorAppointmentsByDay: builder.query<{ availableAppointmentsByDay: iAppointments }, { doctorId: string, day: string, page?: number; limit?: number }>({
            query: ({ doctorId, day, page, limit }) => ({
                url: `/api/v1/appointments/availableByday/${doctorId}?page=${page}&limit=${limit}`,
                method: 'GET',
                body: { day }
            }),
            providesTags: ['Appointments']
        }),
        GetAppointmentsById: builder.query<{ appointment: iAppointments }, { apointmentId: string, day: string, page?: number; limit?: number }>({
            query: ({ apointmentId, day, page, limit }) => ({
                url: `/api/v1/appointments/${apointmentId}?page=${page}&limit=${limit}`,
                method: 'GET',
                body: { day }
            }),
            providesTags: ['Appointments']
        }),
        BookAppointments: builder.mutation<{ appointment: iAppointments, messsage: string }, { AppointmentID: string, comment: string }>({
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
    useGetAllMyAppointmentsQuery,
    useGetAppointmentsByIdQuery,
    useGetBookedAppointmentsQuery,
} = AppointmentApi;
