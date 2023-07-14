'use client';
import React from 'react'
import { FC } from 'react'
import { useGetUserBlogsByIdQuery } from '@Redux/APIs/BlogApi';
import SingleBlog from '@Components/blog/SingleBlog';
import { useGetUserByIdQuery } from '@Redux/APIs/UserApi';
import { useParams } from 'next/navigation';

interface GetDataProps {

}

const GetData: FC<GetDataProps> = ({ }) => {
    const params = useParams() as { username: string };
    const username = params.username
    const { data } = useGetUserByIdQuery({ username });
    // const [page, setPage] = useState(1);
    // const [hasMore, setHasMore] = useState(true);
    // const dispatch = useAppDispatch();
    const { data: BlogData, isFetching, isError } = useGetUserBlogsByIdQuery({ page: 1, id: data?.user?._id as string });
    const { Blogs: doctorBlogs, totalCount } = BlogData || {};
    // useEffect(() => {
    //     if (page > 1) {
    //         dispatch(
    //             BlogsApi.endpoints.getMoreUserBlogsById.initiate({
    //                 page,
    //                 id: data?.user?._id as string
    //             })
    //         );
    //     }
    // }, [page, dispatch]);

    // useEffect(() => {
    //     if (totalCount === 0) {
    //         setHasMore(false);
    //     }
    // }, [totalCount, page]);



    return (
        <div className=' py-5 dark:text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 py-5'>
                {/* {isFetching ?
                    <div>

                    </div>
                    : isError ? <p></p> : doctorBlogs &&
                        <InfiniteScroll
                            dataLength={doctorBlogs.length} //This is important field to render the next data
                            next={() => setPage((prevPage) => prevPage + 1)}
                            hasMore={hasMore}
                            // className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-5 p-1 !m-0'
                            loader={
                                <div className='flex justify-center items-center my-5 animate-spin'>
                                    <ImSpinner3 size={25} />
                                </div>
                            }
                            endMessage={
                                <div className='flex justify-center my-5 text-lg font-semibold'>
                                    <p>You see it all</p>
                                </div>}
                            style={{ marginBottom: '3rem', overflow: 'hidden' }}
                        > */}
                {doctorBlogs?.map((doc) => (
                    <div key={doc?._id}>
                        <SingleBlog blog={doc} />
                    </div>
                ))}
                {/* </InfiniteScroll>
                } */}
            </div>
        </div>
    )
}

export default GetData