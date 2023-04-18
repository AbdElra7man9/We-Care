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
        GetAllReviews: builder.query<{ status: string; results: number; reviews: ReviewType[] }, { page: number; limit: Number }>({
            query: ({ page, limit }) => ({
                url: `/api/v1/coordinator/all-reviews?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            // transformResponse(apiResponse: { status: string; results: number; reviews: ReviewType[] }, meta: {}): ReviewType[] {
            //     // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

            //     return {
            //         DoctorReviews: apiResponse.reviews as ReviewType[],
            //         totalCount: Number(apiResponse.length as number)
            //     };
            // },
        }),
        DeleteReview: builder.mutation<{ msg: string }, Pick<ReviewType, '_id'> & Partial<ReviewType>>({
            query: ({ _id }) => ({
                url: `/api/v1/coordinator/delete-review/${_id}`,
                method: 'DELETE',
            }),
            async onQueryStarted({ _id }, { queryFulfilled, dispatch }) {
                try {
                    dispatch(
                        ReviewsApi.util.updateQueryData("GetAllReviews", { page: 1, limit: 1 }, (draft: { status: string; results: number; reviews: ReviewType[] }) => {
                            console.log('hiiiiiiiiiiiiiiiiiiiiii')
                            const Reviews = draft?.reviews?.filter((item) => item?._id !== _id)
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
    useGetAllReviewsQuery,
    useDeleteReviewMutation,
} = ReviewsApi;
