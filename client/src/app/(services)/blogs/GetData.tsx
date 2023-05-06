'use client';
import React from 'react'
import Blogs from '@Components/blog/Blogs'

import { FC } from 'react'
import { useGetAllBLOGsQuery } from '@Redux/APIs/BlogApi';

interface GetDataProps {

}

const GetData: FC<GetDataProps> = ({ }) => {
    const { data } = useGetAllBLOGsQuery({ page: 1 });
    const { Blogs: doctorBlogs } = data || {}
    if (!doctorBlogs) {
        return null
    }
    return (
        <Blogs Blogs={doctorBlogs} />
    )
}

export default GetData