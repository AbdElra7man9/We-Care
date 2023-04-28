'use client';
import React from 'react'
import { BsArrowRight, BsChat, BsHeart } from 'react-icons/bs'
import { IoCalendar, IoTimeOutline } from 'react-icons/io5'
import Link from 'next/link';
import Image from 'next/image';
import ModalAddBlog from './ModalAddBlog';
import { useAppDispatch, useAppSelector } from '@Hooks/useRedux';
import { BiChevronRight } from 'react-icons/bi';
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import { AnimatePresence } from 'framer-motion';
import { useGetAllBLOGsQuery } from '@Redux/APIs/BlogApi';
import { BlogType } from '@lib/types/blog';
import moment from 'moment';


const Blogs: React.FC = () => {
    const { isModalAddBlog } = useAppSelector(state => state.Features)
    const dispatch = useAppDispatch()
    const { data } = useGetAllBLOGsQuery({ page: 1 });
    const { Blogs } = data || {}

    const SingleBlog: React.FC<{ doc: BlogType }> = ({ doc }) => {

        return (

            <div className='border dark:border-slate-700 overflow-hidden rounded-lg w-full select-none'>
                <div className='w-full h-[20rem] overflow-hidden relative'>
                    {doc?.image?.url &&
                        <Image
                            draggable={false}
                            height={300}
                            width={300}
                            src={doc?.image.url}
                            className='w-full object-cover h-full hover:scale-[1.1] duration-200'
                            alt={doc.user?.name ?? ' '}
                        />
                    }
                </div>
                <div className='space-y-3 p-5 overflow-hidden'>
                    <div className='flex gap-5 items-center whitespace-nowrap'>
                        <div className='flex gap-2 items-center'>
                            <IoCalendar />
                            <p className='text-sm text-gray-500'>{moment(doc?.createdAt).calendar()}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoTimeOutline />
                            <p className='text-sm text-gray-500 bg-[#1466fa]'>{moment(doc?.createdAt).calendar()}</p>
                        </div>
                    </div>
                    <Link href={`/admin/blogs/${doc?._id}`} className='text-lg font-medium ellipse-2 hover:text-blue-500 dark:text-slate-400'>{doc?.des}</Link>
                    <div className='flex justify-between items-center py-3'>
                        <div className='flex items-center gap-3'>
                            <div className='flex gap-2 items-center'>
                                <BsHeart />
                                <p className='text-sm text-gray-500'>{doc?.numLikes}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BsChat />
                                <p className='text-sm text-gray-500'>{doc?.numComments}</p>
                            </div>
                        </div>
                        <Link href={`/blogs/${doc?._id}`} aria-label='more' className='text-blue-600 flex gap-3 items-center whitespace-nowrap'>
                            <p>Read More</p>
                            <BsArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
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
                            Doctris
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
            <div className='select-none py-5 dark:text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 py-5'>
                    {Blogs?.map((doc) => (
                        <div key={doc?._id}>
                            <SingleBlog doc={doc} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blogs
