'use client';
import React from 'react'
import { BsArrowRight, BsChat, BsHeart } from 'react-icons/bs'
import { IoCalendar, IoTimeOutline } from 'react-icons/io5'
import Link from 'next/link';
import Image from 'next/image';
import { BlogType } from '@lib/types/blog';
import moment from 'moment';

interface BlogsProps {
    blog: BlogType
}
const SingleBlog: React.FC<BlogsProps> = ({ blog }) => {

    return (

        <div className='border dark:border-slate-700 overflow-hidden rounded-lg w-full select-none'>
            <div className='w-full h-[20rem] overflow-hidden relative'>
                {blog?.image?.url &&
                    <Image
                        draggable={false}
                        height={300}
                        width={300}
                        src={blog?.image.url}
                        className='w-full object-cover h-full hover:scale-[1.1] duration-200'
                        alt={blog.user?.name ?? ' '}
                    />
                }
            </div>
            <div className='space-y-3 p-5 overflow-hidden'>
                <div className='flex gap-5 items-center whitespace-nowrap'>
                    <div className='flex gap-2 items-center'>
                        <IoCalendar />
                        <p className='text-sm text-gray-500'>{moment(blog?.createdAt).calendar()}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoTimeOutline />
                        <p className='text-sm text-gray-500 bg-[#1466fa]'>{moment(blog?.createdAt).calendar()}</p>
                    </div>
                </div>
                <Link href={`/admin/blogs/${blog?._id}`} className='text-lg font-medium ellipse-2 h-16 hover:text-blue-500 dark:text-slate-400'>{blog?.des}</Link>
                <div className='flex justify-between items-center py-3'>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-2 items-center'>
                            <BsHeart />
                            <p className='text-sm text-gray-500'>{blog?.numLikes}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BsChat />
                            <p className='text-sm text-gray-500'>{blog?.numComments}</p>
                        </div>
                    </div>
                    <Link href={`/blogs/${blog?._id}`} aria-label='more' className='text-blue-600 flex gap-3 items-center whitespace-nowrap'>
                        <p>Read More</p>
                        <BsArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog