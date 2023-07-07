'use client';
import React from 'react'
import { FC } from 'react'
import { useGetAllBLOGsQuery } from '@Redux/APIs/BlogApi';
import SingleBlog from '@Components/blog/SingleBlog';

interface BlogsDataProps {

}

const BlogsData: FC<BlogsDataProps> = ({ }) => {
    const { data } = useGetAllBLOGsQuery({ page: 1, limit: 4 });
    const { Blogs: doctorBlogs } = data || {}

    return (
        <>
            <div className=' py-5 dark:text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 py-5'>
                    {(doctorBlogs?.length === 0) ?
                        <div className='flex justify-center items-center h-96 w-full'>
                            <p className='text-balck dark:text-slate-100'>No Blogs Founded</p>
                        </div>
                        : doctorBlogs?.map((doc) => (
                            <div key={doc?._id}>
                                <SingleBlog blog={doc} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default BlogsData