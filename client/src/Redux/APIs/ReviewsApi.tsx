'use client';
import { ReviewType } from '@lib/types/review';
import { apiSlice } from '../ApiSlice';
interface ReviewArgs {
    title: string;
    image: string;
    des: string;
}
export const ReviewsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetDoctorReviews: builder.query<{ status: string; results: number; reviews: ReviewType[] }, { page: number; limit: Number; id: string }>({
            query: ({ page, limit, id }) => ({
                url: `/api/v1/reviews/${id}?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            // providesTags: ['Review'],
            // transformResponse(apiResponse: ReviewType[], meta) {
            //     // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

            //     return {
            //         DoctorReviews: apiResponse,
            //         totalCount: Number(apiResponse.length)
            //     };
            // },
        }),
        // GetMoreDoctorReviews: builder.query<{ status: string; results: number; reviews: ReviewType[] }, { page: number; limit: Number }>({
        //     query: ({ page, limit }) => ({
        //         url: `/api/v1/Review?page=${page}&limit=${limit}`,
        //         method: 'GET',
        //     }),
        //     async onQueryStarted(args, { queryFulfilled, dispatch }) {

        //         try {

        //             const { data } = await queryFulfilled;
        //             dispatch(
        //                 apiSlice.util.updateQueryData("GetDoctorReviews" as string, 1, (draft) => {
        //                     return {
        //                         DoctorReviews: [
        //                             ...draft.DoctorReviews,
        //                             ...data,
        //                         ],
        //                         totalCount: Number(data.length),
        //                     };
        //                 })
        //             )
        //         } catch (err) {
        //             console.log(err)
        //         }
        //     },
        // }),
        GetDoctorReviewsById: builder.query<{ Reviews: ReviewType[], status: string }, { id: string, page: number }>({
            query: (id) => ({
                url: `/api/v1/reviews/get/all/${id}?page=${1}`,
                method: 'GET',
            }),
            providesTags: ['Review'],
            // transformResponse(apiResponse, meta) {
            //     // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

            //     return {
            //         DoctorReviewsById: apiResponse,
            //         totalCount: Number(apiResponse.length)
            //     };
            // },
        }),
        // GetMoreDoctorReviewsById: builder.query<{ Reviews: ReviewType[], status: string }, { id: string, page: number }>({
        //     query: ({ id, page }) => ({
        //         url: `/api/v1/Review/get/all/${id}?page=${page}`,
        //         method: 'GET',
        //     }),
        //     async onQueryStarted(args, { queryFulfilled, dispatch }) {
        //         try {

        //             const { data } = await queryFulfilled;
        //             dispatch(
        //                 apiSlice.util.updateQueryData("getDoctorReviewsById", args.id, (draft) => {
        //                     return {
        //                         DoctorReviewsById: [
        //                             ...draft.DoctorReviewsById,
        //                             ...data,
        //                         ],
        //                         totalCount: Number(data.length),
        //                     };
        //                 })
        //             )
        //         } catch (err) {
        //             console.log(err)
        //         }
        //     },
        // }),
        // GetAllReviews: builder.query<{ Reviews: ReviewType[], status: string }, { page: number }>({
        //     query: (page) => ({
        //         url: `/api/v1/Review?page=${page}`,
        //         method: 'GET',
        //     }),
        //     providesTags: ['Review'],
        //     transformResponse(apiResponse, meta) {
        //         // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

        //         return {
        //             followersReviews: apiResponse,
        //             totalCount: Number(apiResponse.length)
        //         };
        //     },
        // }),
        // GetMoreAllReviews: builder.query<{ Reviews: ReviewType[], status: string }, { page: number }>({
        //     query: (page) => ({
        //         url: `/api/v1/Review?page=${page}`,
        //         method: 'GET',
        //     }),
        //     async onQueryStarted(args, { queryFulfilled, dispatch }) {

        //         try {

        //             const { data } = await queryFulfilled;
        //             dispatch(
        //                 apiSlice.util.updateQueryData("getFollowersReviews", 1, (draft) => {
        //                     return {
        //                         followersReviews: [
        //                             ...draft.followersReviews,
        //                             ...data,
        //                         ],
        //                         totalCount: Number(data.length),
        //                     };
        //                 })
        //             )
        //         } catch (err) {
        //             console.log(err)
        //         }
        //     },
        // }),

        // GetReviewDetails: builder.query<ReviewType, { id: string }>({
        //     query: (id) => ({
        //         url: `/api/v1/Review/${id}`,
        //         method: 'GET',
        //     }),
        //     providesTags: ['Review'],
        // }),
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
                        ReviewsApi.util.updateQueryData("getFollowersReviews", 1, (draft: { status: string; results: number; reviews: ReviewType[] }) => {
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
            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                console.log(id)
                try {
                    dispatch(
                        ReviewsApi.util.updateQueryData("getFollowersReviews", 1, (draft: { status: string; results: number; reviews: ReviewType[] }) => {
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
    useGetDoctorReviewsByIdQuery,
    useGetDoctorReviewsQuery,
    useUpdateReviewsMutation,
    useDeleteReviewMutation,
} = ReviewsApi;
