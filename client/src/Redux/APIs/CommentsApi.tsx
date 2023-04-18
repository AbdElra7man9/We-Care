import { CommentType } from '@lib/types/comment';
import { LikeType } from '@lib/types/Like';
import { apiSlice } from '../ApiSlice';
import { BlogsApi } from './BlogApi';
interface CommentsResponse {
    status?: string;
    totalCounts?: number;
    Comments: CommentType[];
}
export const CommentsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetComments: builder.query<CommentsResponse, { id: string }>({
            query: ({ id }) => ({
                url: `/api/v1/blog/comments/${id}`,
                method: 'GET',
            }),
            // providesTags: ['Comment'],
        }),
        createComment: builder.mutation<{ status: string; Comment: CommentType }, { content: string, id: string }>({
            query: ({ content, id }) => ({
                url: `/api/v1/blog/add-comment/${id}`,
                method: 'Post',
                body: content,
            }),
            async onQueryStarted({ id }, { queryFulfilled, dispatch }) {
                try {

                    const { data } = await queryFulfilled;

                    dispatch(
                        BlogsApi.util.updateQueryData("getBlogDetails", { id }, (draft) => {
                            draft.numComments = +1
                        })
                    )
                    dispatch(
                        CommentsApi.util.updateQueryData("GetComments", { id }, (draft) => {
                            return {
                                Comments: [
                                    ...draft.Comments,
                                    data.Comment
                                ]
                            }
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        Like: builder.mutation<{ status: string; message: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/api/v1/blog/like/${id}`,
                method: 'PUT',
            }),
            async onQueryStarted({ id }, { queryFulfilled, dispatch, getState }) {
                try {
                    // const userInfo = getState().auth.user
                    const { data } = await queryFulfilled;

                    dispatch(
                        BlogsApi.util.updateQueryData("getBlogDetails", { id }, (draft) => {
                            draft.numLikes = +1
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        UnLike: builder.mutation<{ status: string; message: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/api/v1/blog/unlike/${id}`,
                method: 'PUT',
            }),
            async onQueryStarted({ id }, { queryFulfilled, dispatch, getState }) {
                try {
                    // const userInfo = getState().auth.user
                    const { data } = await queryFulfilled;
                    // replace the likes array inside followers posts array with the new array of likes 
                    dispatch(
                        BlogsApi.util.updateQueryData("getBlogDetails", { id }, (draft) => {
                            draft.numLikes = -1


                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        updateComment: builder.mutation({
            query: ({ data, id }) => ({
                url: `/api/comment/update/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Comment'],
        }),
        deleteComment: builder.mutation({
            query: ({ id }) => ({
                url: `/api/comment/delete/${id}`,
                method: 'DELETE',
            }),
            // invalidatesTags: (result, error, arg) => [{ type: 'Comments', id: arg.id }],
        }),
    }),
});

export const {
    useCreateCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
    useLikeMutation,
    useUnLikeMutation,
} = CommentsApi;
