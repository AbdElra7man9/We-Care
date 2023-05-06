'use client';
import { userType } from '@lib/types/user';
import { apiSlice } from '../ApiSlice';

interface PatientArgs {
    rating?: string;
    comment?: string;
    id?: string;
    page?: number;
    limit?: number;
}
interface PatientResponse {
    status: string;
    results: number;
    Patients: userType[]
}
export const PatientsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetAllPatients: builder.query<PatientResponse, { page: number, limit: number }>({

            query: ({ page, limit }) => ({
                url: `/api/v1/patients?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
        }),
        getMorePatients: builder.query<PatientResponse, { page: number, limit: number }>({

            query: ({ page, limit }) => ({
                url: `/api/v1/patients?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        PatientsApi.util.updateQueryData("GetAllPatients", { page: 1, limit: 10 }, (draft) => {
                            return {
                                status: data.status,
                                results: data.results,
                                Patients: [
                                    ...draft.Patients,
                                    ...data.Patients,
                                ],
                            };
                        })
                    )
                } catch (err) {
                    // console.log(err)
                }
            },
        }),
    }),
});

export const {
    useGetAllPatientsQuery
} = PatientsApi;
