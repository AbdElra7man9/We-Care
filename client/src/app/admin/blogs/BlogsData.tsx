'use client';
import React from 'react'
import { FC } from 'react'
import { useGetAllBLOGsQuery } from '@Redux/APIs/BlogApi';
import SingleBlog from '@Components/blog/SingleBlog';

interface BlogsDataProps {

}

const BlogsData: FC<BlogsDataProps> = ({ }) => {
    const { data } = useGetAllBLOGsQuery({ page: 1 });
    const { Blogs: doctorBlogs } = data || {}
    if (!doctorBlogs) {
        return null
    }
    return (
        <>
            {doctorBlogs?.map((doc) => (
                <div key={doc?._id}>
                    <SingleBlog blog={doc} />
                </div>
            ))}
        </>
    )
}

export default BlogsData