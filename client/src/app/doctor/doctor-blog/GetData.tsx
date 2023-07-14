'use client';
import React, { useEffect, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import { FC } from 'react'
import { BlogsApi, useGetUserBlogsByIdQuery } from '@Redux/APIs/BlogApi';
import { useAppDispatch, useAppSelector } from '@Hooks/useRedux';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import ModalAddBlog from '@Components/blog/ModalAddBlog';
import SingleBlog from '@Components/blog/SingleBlog';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ImSpinner3 } from 'react-icons/im';

interface GetDataProps {

}

const GetData: FC<GetDataProps> = ({ }) => {
    // const [page, setPage] = useState(1);
    // const [hasMore, setHasMore] = useState(true);
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(selectCurrentUser)
    const { data, isFetching, isError } = useGetUserBlogsByIdQuery({ page:1, id: userInfo?._id as string });
    const { Blogs: doctorBlogs, totalCount } = data || {};
    const { isModalAddBlog } = useAppSelector(state => state.Features)

    // useEffect(() => {
    //     if (page > 1) {
    //         dispatch(
    //             BlogsApi.endpoints.getMoreUserBlogsById.initiate({
    //                 page,
    //                 id: userInfo?._id as string
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
        <>
            <AnimatePresence>
                {isModalAddBlog && <ModalAddBlog />}
            </AnimatePresence>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg font-semibold my-3'>Blogs</p>
                    <div className='flex gap-3 items-center justify-center'>
                        <Link
                            href='/'
                            aria-label='home'
                            className='uppercase hover:text-blue-500 hover:underline'>
                            We Care
                        </Link>
                        <BiChevronRight />
                        <Link
                            href='/patient/booking-appointment/clinc'
                            aria-label='booking appointment'
                            className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
                        >
                            Blog
                        </Link>
                    </div>
                </div>
                <button
                    aria-label='Add BLOG'
                    onClick={() => dispatch(FeatureAction.setModalAddBlog(true))}
                    className='bg-blue-700 text-white font-semibold rounded-md p-3 px-5'>
                    Add Blog
                </button>
            </div>
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
                                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-5 p-1 !m-0'
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
                                {(doctorBlogs?.length === 0) ?
                                    <div className='flex justify-center items-center h-96 w-full'>
                                        <p className='text-balck dark:text-slate-100'>No Blogs Founded</p>
                                    </div>
                                    : doctorBlogs?.map((doc) => (
                                        <div key={doc?._id}>
                                            <SingleBlog blog={doc} />
                                        </div>
                                    ))}
                            {/* </InfiniteScroll>
                    } */}
                </div>
            </div>
        </>
    )
}

export default GetData