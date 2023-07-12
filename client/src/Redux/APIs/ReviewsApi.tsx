'use client';
import { ReviewType } from '@lib/types/review';
import { apiSlice } from '../ApiSlice';

interface ReviewArgs {
    rating?: string;
    comment?: string;
    id?: string;
    page?: number;
    limit?: number;
}
export const ReviewsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetDoctorReviews: builder.query<{ status: string; results: number; reviews: ReviewType[] }, { page: number, limit: number, id: string }>({
            query: ({ page, limit, id }) => ({
                url: `/api/v1/reviews/${id}?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Review']
        }),
        GetDoctorLoggedReviews: builder.query<{ status: string; results: number; reviews: ReviewType[] }, { page: number, limit: number }>({
            query: ({ page, limit }) => ({
                url: `/api/v1/reviews/doctor?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Review']
        }),
        GetMoreDoctorReviews: builder.query<{ status: string; results: number; reviews: ReviewType[] }, { page: number, limit: number, id: string }>({
            query: ({ page, limit, id }) => ({
                url: `/api/v1/reviews/${id}?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            async onQueryStarted({ id }, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        ReviewsApi.util.updateQueryData("GetDoctorReviews", { page: 1, limit: 1, id }, (draft) => {
                            return {
                                reviews: [
                                    ...draft.reviews,
                                    ...data.reviews,
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

        createReview: builder.mutation<{ Review: ReviewType, messsage: string }, ReviewArgs>({
            query: (data) => ({
                url: '/api/v1/reviews',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Review'],
            async onQueryStarted(args, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        ReviewsApi.util.updateQueryData("GetDoctorReviews", { page: 1, limit: 1, id: args.id as string }, (draft) => {
                            return {
                                reviews: [
                                    data.Review,
                                    ...draft.reviews
                                ],
                                results: draft.results,
                                status: draft.status,
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        updateReviews: builder.mutation<{ Review: ReviewType, msg: string }, { data: ReviewArgs, id: string }>({
            query: ({ data, id }) => ({
                url: `/api/v1/reviews/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Review'],
        }),

        DeleteReview: builder.mutation<{ msg: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/api/v1/reviews/delete-review/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Review'],
            async onQueryStarted({ id }, { queryFulfilled, dispatch }) {
                try {
                    dispatch(
                        ReviewsApi.util.updateQueryData("GetDoctorReviews", { page: 1, limit: 1, id }, (draft) => {
                            const Reviews = draft?.reviews?.filter((item) => item?._id !== id)
                            return {
                                reviews: [
                                    ...Reviews
                                ],
                                results: draft.results,
                                status: draft.status,
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
    }),
});

export const {
    useCreateReviewMutation,
    useGetDoctorReviewsQuery,
    useGetDoctorLoggedReviewsQuery,
    useUpdateReviewsMutation,
    useDeleteReviewMutation,
} = ReviewsApi;
