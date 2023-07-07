'use client';
import { BlogType } from '@lib/types/blog';
import { apiSlice } from '../ApiSlice';
interface BlogArgs {
    title: string;
    image: string;
    des: string;
}
interface BlogResponse {
    Blogs: BlogType[];
    totalCount: number;
    status: string
}
export const BlogsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query<BlogType[], 1>({
            query: (page) => ({
                url: `/api/v1/blog?page=${page}`,
                method: 'GET',
            }),
        }),
        getUserBlogs: builder.query<BlogResponse, { page: number }>({
            query: ({ page }) => ({
                url: `/api/v1/Blog/user?page=${page}`,
                method: 'GET',
            }),
            providesTags: ['Blog'],
        }),
        getMoreUserBlogs: builder.query<BlogResponse, { page: number }>({
            query: (page) => ({
                url: `/api/v1/Blog/user?page=${page}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        BlogsApi.util.updateQueryData("getUserBlogs", { page: 1 }, (draft) => {
                            return {
                                Blogs: [
                                    ...draft.Blogs,
                                    ...data.Blogs,
                                ],
                                totalCount: data.totalCount,
                                status: data.status,
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        getUserBlogsById: builder.query<BlogResponse, { id: string, page: number }>({
            query: (id) => ({
                url: `/api/v1/Blog/get/all/${id}?page=${1}`,
                method: 'GET',
            }),
            providesTags: ['Blog'],
        }),
        getMoreUserBlogsById: builder.query<BlogResponse, { id: string, page: number }>({
            query: ({ id, page }) => ({
                url: `/api/v1/Blog/get/all/${id}?page=${page}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        BlogsApi.util.updateQueryData("getUserBlogsById", args, (draft) => {
                            return {
                                Blogs: [
                                    ...draft.Blogs,
                                    ...data.Blogs,
                                ],
                                totalCount: data.totalCount,
                                status: data.status,
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        getAllBLOGs: builder.query<BlogResponse, { page: number, limit: number }>({
            query: ({ page, limit }) => ({
                url: `/api/v1/Blog?page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['Blog'],
        }),

        getMoreAllBlogs: builder.query<BlogResponse, { page: number }>({
            query: ({ page }) => ({
                url: `/api/v1/Blog?page=${page}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        BlogsApi.util.updateQueryData("getAllBLOGs", { page: 1, limit: 3 }, (draft) => {
                            return {
                                Blogs: [
                                    ...draft.Blogs,
                                    ...data.Blogs,
                                ],
                                totalCount: data.totalCount,
                                status: data.status,
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),

        getBlogDetails: builder.query<{ status: string; BlogDetails: BlogType }, { blogId: string }>({
            query: ({ blogId }) => ({
                url: `/api/v1/Blog/details/${blogId}`,
                method: 'GET',
            }),
            providesTags: ['Blog'],
        }),
        createBlog: builder.mutation<{ Blog: BlogType, messsage: string }, BlogArgs>({
            query: (data) => ({
                url: '/api/v1/Blog',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Blog'],
            async onQueryStarted(args, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        BlogsApi.util.updateQueryData("getAllBLOGs", { page: 1, limit: 3 }, (draft) => {
                            return {
                                Blogs: [
                                    data.Blog,
                                    ...draft.Blogs,
                                ],
                                totalCount: draft.totalCount,
                                status: draft.status,
                            };

                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        updateBlogs: builder.mutation<{ Blog: BlogType, msg: string }, { data: BlogArgs, id: string }>({
            query: ({ data, id }) => ({
                url: `/api/Blog/update/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Blog'],
        }),

        deleteBlogs: builder.mutation<{ msg: string }, { blogId: string }>({
            query: ({ blogId }) => ({
                url: `/api/Blog/delete/${blogId}`,
                method: 'DELETE',
            }),
            async onQueryStarted({ blogId }, { queryFulfilled, dispatch }) {
                try {
                    dispatch(
                        BlogsApi.util.updateQueryData("getAllBLOGs", { page: 1, limit: 3 }, (draft) => {
                            const Blogs = draft?.Blogs?.filter((item) => item?._id !== blogId)
                            return {
                                Blogs: [
                                    ...Blogs
                                ],
                                totalCount: draft.totalCount,
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
    useCreateBlogMutation,
    useGetBlogsQuery,
    useGetUserBlogsByIdQuery,
    useGetUserBlogsQuery,
    useGetAllBLOGsQuery,
    useGetBlogDetailsQuery,
    useUpdateBlogsMutation,
    useDeleteBlogsMutation,
} = BlogsApi;
