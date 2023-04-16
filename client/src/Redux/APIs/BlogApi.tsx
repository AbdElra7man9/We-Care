import { BlogType } from '@lib/types/blog';
import { apiSlice } from '../ApiSlice';
interface BlogArgs {
    title: string;
    image: string;
    des: string;
}
export const BlogsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query<BlogType[], 1>({
            query: (page) => ({
                url: `/api/v1/blog?page=${page}`,
                method: 'GET',
            }),
            transformResponse(apiResponse: BlogType[], meta: {}): BlogType[] {
                // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

                return {
                    userBlogs: apiResponse,
                    totalCount: Number(apiResponse.length)
                };
            },
        }),
        getUserBlogs: builder.query({
            query: (page) => ({
                url: `/api/v1/Blog/getuser?page=${page}`,
                method: 'GET',
            }),
            providesTags: ['Blog'],
            transformResponse(apiResponse: BlogType[], meta) {
                // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

                return {
                    userBlogs: apiResponse,
                    totalCount: Number(apiResponse.length)
                };
            },
        }),
        getMoreUserBlogs: builder.query<BlogType[], { page: 1 }>({
            query: (page) => ({
                url: `/api/v1/Blog/getuser?page=${page}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData("getUserBlogs", 1, (draft) => {
                            return {
                                userBlogs: [
                                    ...draft.userBlogs,
                                    ...data,
                                ],
                                totalCount: Number(data.length),
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        getUserBlogsById: builder.query<BlogType[], { page: 1 }>({
            query: (id) => ({
                url: `/api/v1/Blog/get/all/${id}?page=${1}`,
                method: 'GET',
            }),
            providesTags: ['Blog'],
            transformResponse(apiResponse, meta) {
                // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

                return {
                    userBlogsById: apiResponse,
                    totalCount: Number(apiResponse.length)
                };
            },
        }),
        getMoreUserBlogsById: builder.query<BlogType[], { page: 1 }>({
            query: ({ id, page }) => ({
                url: `/api/v1/Blog/get/all/${id}?page=${page}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData("getUserBlogsById", args.id, (draft) => {
                            return {
                                userBlogsById: [
                                    ...draft.userBlogsById,
                                    ...data,
                                ],
                                totalCount: Number(data.length),
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        getAllBLOGs: builder.query<BlogType[], { page: 1 }>({
            query: (page) => ({
                url: `/api/v1/Blog?page=${page}`,
                method: 'GET',
            }),
            providesTags: ['Blog'],
            transformResponse(apiResponse, meta) {
                // const totalCount = Number(meta.response.headers.get('X-Total-Count'));

                return {
                    followersBlogs: apiResponse,
                    totalCount: Number(apiResponse.length)
                };
            },
        }),
        getMoreFollowersBlogs: builder.query({
            query: (page) => ({
                url: `/api/v1/Blog/get/followers/Blogs?page=${page}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {

                try {

                    const { data } = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData("getFollowersBlogs", 1, (draft) => {
                            return {
                                followersBlogs: [
                                    ...draft.followersBlogs,
                                    ...data,
                                ],
                                totalCount: Number(data.length),
                            };
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            },
        }),

        getBlogDetails: builder.query<BlogType, { id: string }>({
            query: (id) => ({
                url: `/api/v1/Blog/${id}`,
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
                        apiSlice.util.updateQueryData("getFollowersBlogs", 1, (draft) => {
                            return {
                                followersBlogs: [
                                    data.Blog,
                                    ...draft.followersBlogs,
                                ],
                                totalCount: Number(4),
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

        deleteBlogs: builder.mutation<{ msg: string }, { id: string }>({
            query: (id) => ({
                url: `/api/Blog/delete/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                console.log(id)
                try {
                    dispatch(
                        apiSlice.util.updateQueryData("getFollowersBlogs", 1, (draft) => {
                            const Blogs = draft?.followersBlogs?.filter((item) => item?._id !== id)
                            return {
                                followersBlogs: [
                                    ...Blogs
                                ],
                                totalCount: Number(4),
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
    useGetMoreFollowersBlogsQuery,
} = BlogsApi;
