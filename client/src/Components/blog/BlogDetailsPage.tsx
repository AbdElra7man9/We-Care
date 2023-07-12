'use client';
import { FC } from 'react'
import { useGetAllBLOGsQuery, useGetBlogDetailsQuery } from '@Redux/APIs/BlogApi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { MdAccessTimeFilled } from 'react-icons/md'
import AddComment from './AddComment'
import { useGetCommentsQuery } from '@Redux/APIs/CommentsApi'
import moment from 'moment';

interface BlogProps {
    blogId: string;
}

const BlogDetailsPage: FC<BlogProps> = ({ blogId }) => {
    // const params = useParams() 
    // const blogId = params?.blogId as string
    const { data: BlogQuery } = useGetBlogDetailsQuery({ blogId });
    const { data: CommentQuery } = useGetCommentsQuery({ blogId });
    const { data } = useGetAllBLOGsQuery({ page: 1, limit: 4 });
    const { Blogs } = data || {}

    const { BlogDetails } = BlogQuery || {}
    const { Comments } = CommentQuery || {}
    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg font-semibold my-3'>{BlogDetails?.title}</p>
                    <div className='flex items-center gap-4 text-gray-400'>
                        <div className='flex items-center gap-2'>
                            <BsPerson />
                            <p>{BlogDetails?.user?.name}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdAccessTimeFilled />
                            <p>{moment(BlogDetails?.createdAt).calendar()}</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 items-center justify-center'>
                    <Link
                        href='/'
                        aria-label='home'
                        className='uppercase hover:text-blue-500 hover:underline'>
                        We Care
                    </Link>
                    <BiChevronRight />
                    <Link
                        href='/blogs'
                        aria-label='booking appointment'
                        className='uppercase font-medium hover:text-blue-500 hover:underline'
                    >
                        Blog
                    </Link>
                    <BiChevronRight />
                    <Link
                        href={`/blogs/${BlogDetails?._id}`}
                        aria-label='booking appointment'
                        className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
                    >
                        Blog Details
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3 my-5'>
                <div className='col-span-2 border dark:border-slate-500 rounded-md'>
                    {BlogDetails?.image?.url &&
                        <Image
                            height={600}
                            width={600}
                            draggable={false}
                            src={BlogDetails?.image?.url}
                            alt={BlogDetails?.title ?? ''}
                            className='w-full h-[30rem] object-cover'
                        />
                    }
                    <div className='p-5'>
                        <p className='text-gray-500'>{BlogDetails?.des}</p>
                        <div className='my-5'>
                            <h2 className='py-3 font-medium text-lg'>Comments :</h2>
                            {Comments?.map(comment => (
                                <div key={comment._id}>
                                    <div className='flex items-center gap-3'>
                                        {comment?.user?.profilePicture &&
                                            <Image
                                                height={100}
                                                width={100}
                                                draggable={false}
                                                src={comment?.user?.profilePicture ?? '/'}
                                                alt={comment?.user?.name ?? ''}
                                                className='w-14 h-14 rounded-full object-cover'
                                            />
                                        }
                                        <span>
                                            <p className='font-medium text-lg text-gray-600 dark:text-slate-300'>{comment.user?.name}</p>
                                            <p className='text-slate-500 dark:text-slate-400 text-sm'>{(moment(comment.createdAt).fromNow())}</p>
                                        </span>
                                    </div>
                                    <div className='bg-sky-50 dark:bg-slate-800 p-5 w-full rounded-md my-2'>{comment.content}</div>
                                </div>
                            ))}
                        </div>
                        <div className='my-5'>
                            <h2 className='py-3 font-medium text-lg'>Leave A Comment :</h2>
                            <AddComment blogId={BlogDetails?._id as string} />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 border dark:border-slate-500 rounded-md p-5 overflow-hidden'>
                    <h2 className='py-3 font-medium text-lg'>Recent Blogs</h2>
                    {Blogs?.map((doc) => (
                        <div key={doc?._id} className='flex gap-3 my-4'>

                            {doc?.image?.url &&
                                <Image
                                    height={200}
                                    width={200}
                                    draggable={false}
                                    src={doc.image?.url ?? ''}
                                    alt={doc.title ?? ''}
                                    className='w-32 h-24 rounded-lg object-cover'
                                />
                            }
                            <Link href={`/blogs/${BlogDetails?._id}`}>
                                <p className='font-medium text-lg text-gray-600'>{doc.des}</p>
                                <p className='text-slate-500 text-sm'>{moment(doc.createdAt).calendar()}</p>
                            </Link>
                        </div>
                    ))}
                    {/* <h2 className='py-3 font-medium text-lg'>Tags Cloud</h2> */}

                </div>
            </div>
        </>
    )
}

export default BlogDetailsPage