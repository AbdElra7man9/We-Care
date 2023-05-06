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
        GetComments: builder.query<CommentsResponse, { blogId: string }>({
            query: ({ blogId }) => ({
                url: `/api/v1/blog/comments/${blogId}`,
                method: 'GET',
            }),
            // providesTags: ['Comment'],
        }),
        createComment: builder.mutation<{ status: string; Comment: CommentType }, { content: string, blogId: string }>({
            query: ({ content, blogId }) => ({
                url: `/api/v1/blog/add-comment/${blogId}`,
                method: 'Post',
                body: content,
            }),
            async onQueryStarted({ blogId }, { queryFulfilled, dispatch }) {
                try {

                    const { data } = await queryFulfilled;

                    dispatch(
                        BlogsApi.util.updateQueryData("getBlogDetails", { blogId }, (draft) => {
                            draft.BlogDetails.numComments = +1
                        })
                    )
                    dispatch(
                        CommentsApi.util.updateQueryData("GetComments", { blogId }, (draft) => {
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
        Like: builder.mutation<{ status: string; message: string }, { blogId: string }>({
            query: ({ blogId }) => ({
                url: `/api/v1/blog/like/${blogId}`,
                method: 'PUT',
            }),
            async onQueryStarted({ blogId }, { queryFulfilled, dispatch, getState }) {
                try {
                    // const userInfo = getState().auth.user
                    const { data } = await queryFulfilled;

                    dispatch(
                        BlogsApi.util.updateQueryData("getBlogDetails", { blogId }, (draft) => {
                            draft.BlogDetails.numLikes = +1
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        UnLike: builder.mutation<{ status: string; message: string }, { blogId: string }>({
            query: ({ blogId }) => ({
                url: `/api/v1/blog/unlike/${blogId}`,
                method: 'PUT',
            }),
            async onQueryStarted({ blogId }, { queryFulfilled, dispatch, getState }) {
                try {
                    // const userInfo = getState().auth.user
                    const { data } = await queryFulfilled;
                    // replace the likes array inside followers posts array with the new array of likes 
                    dispatch(
                        BlogsApi.util.updateQueryData("getBlogDetails", { blogId }, (draft) => {
                            draft.BlogDetails.numLikes = -1


                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        updateComment: builder.mutation({
            query: ({ data, blogId }) => ({
                url: `/api/comment/update/${blogId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Comment'],
        }),
        deleteComment: builder.mutation({
            query: ({ blogId }) => ({
                url: `/api/comment/delete/${blogId}`,
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
    useGetCommentsQuery,
} = CommentsApi;
