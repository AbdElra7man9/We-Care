'use client';
import { userType } from '@lib/types/user';
import { setCredentials } from '@Redux/Slices/UserSlice';
import { apiSlice } from '../ApiSlice';

interface DoctorArgs {
    rating?: string;
    comment?: string;
    id?: string;
    page?: number;
    limit?: number;
}
interface DoctorResponse {
    status: string;
    results: number;
    doctors: userType[]
}
export const DoctorsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetDoctors: builder.query<DoctorResponse, { page: number, limit: number }>({

            query: ({ page, limit }) => ({
                url: `/api/v1/doctors?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
        }),
        GetDoctorById: builder.query<{ status: string; results: number; doctor: userType }, { doctorId: string }>({

            query: ({ doctorId }) => ({
                url: `/api/v1/doctors/${doctorId}`,
                method: 'GET',
            }),
        }),
        GetMoreDoctors: builder.query<DoctorResponse, { page: number, limit: number }>({

            query: ({ page, limit }) => ({
                url: `/api/v1/doctors?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        DoctorsApi.util.updateQueryData("GetDoctors", { page: 1, limit: 1 }, (draft) => {
                            return {
                                doctors: [
                                    ...draft.doctors,
                                    ...data.doctors,
                                ],
                                status: data.status,
                                results: data.results,
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),

        SignUpDoctor: builder.mutation<{ user: userType, token: string; status: string }, DoctorArgs>({
            query: (data) => ({
                url: '/api/v1/Doctors',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    const { token, user } = data
                    localStorage.setItem('persist', 'true')
                    dispatch(
                        setCredentials({ token, user })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        updateDoctorsStatus: builder.mutation<{ user: userType, message: string }, { data: DoctorArgs, id: string }>({
            query: ({ data, id }) => ({
                url: `/api/v1/Doctors/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
});

export const {
    useSignUpDoctorMutation,
    useGetDoctorsQuery,
    useGetDoctorByIdQuery,
} = DoctorsApi;
