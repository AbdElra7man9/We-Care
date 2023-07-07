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
    allDoctors: userType[]
}
export const DoctorsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetDoctors: builder.query<DoctorResponse, { page: number, limit: number }>({

            query: ({ page, limit }) => ({
                url: `/api/v1/doctors/allDoctors?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
        }),
        GetTopDoctors: builder.query<{ allDoctors: userType[] }, { page: number, limit: number }>({

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
        search: builder.query<{ status: string; results: number; searchedDoctors: userType[] },
            { page: number, limit: number, keyword: string, specialization: string, minFees: number, maxFees: number, gender: string, address_governorate: string, address_city: string }>
            ({
                query: ({ page, limit, keyword, specialization, minFees, maxFees, gender, address_governorate, address_city }) => ({
                    url: `/api/v1/doctors/search?page=${page}&limit=${limit}&keyword=${keyword}&specialization=${specialization}&minFees=${minFees}&maxFees=${maxFees}&gender=${gender}&address_governorate=${address_governorate}&address_city=${address_city}`,
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
                                allDoctors: [
                                    ...draft.allDoctors,
                                    ...data.allDoctors,
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
    useGetTopDoctorsQuery,
    useGetDoctorByIdQuery,
    useSearchQuery,
} = DoctorsApi;
