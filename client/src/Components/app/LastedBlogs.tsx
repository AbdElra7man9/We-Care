'use client';
import React from 'react'
import { useGetAllBLOGsQuery } from '@Redux/APIs/BlogApi';
import { BlogType } from '@lib/types/blog';
import SingleBlog from '@Components/blog/SingleBlog';

const LastedBlogs: React.FC = () => {
  const { data } = useGetAllBLOGsQuery({ page: 1, limit: 3 });
  const { Blogs } = data || {}

  return (
    <div className='container px-5 max-w-7xl  py-5 dark:text-white'>
      <div className='text-center space-y-3'>
        <h3 className='text-2xl font-medium'>Latest News & Blogs</h3>
        <p className='text-gray-400 leading-loose dark:text-slate-400'>
          Great doctor if you need your family member to
          get effective immediate assistance, emergency
          <br />
          treatment or a simple consultation.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
        {Blogs?.map((doc) => (
          <div key={doc?._id}>
            <SingleBlog blog={doc} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LastedBlogs
