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

interface BlogProps {
    _id: string;
    ImgSrc: string;
    des: string;
    time: string;
    since: string;
    numLikes: number;
    numComments: number;
}
const Blogs: React.FC = () => {
    const { isModalAddBlog } = useAppSelector(state => state.Features)
    const dispatch = useAppDispatch()

    const BlogsDetails: BlogProps[] = [
        {
            _id: '1',
            ImgSrc: '/Images/Blogs/01.jpg',
            des: 'You can easily connect to doctor and make a treatment',
            time: '20th November, 2020',
            since: '5 min read',
            numLikes: 44,
            numComments: 5
        }, {
            _id: '2',
            ImgSrc: '/Images/Blogs/02.jpg',
            des: 'Lockdowns lead to fewer people seeking medical care',
            time: '20th November, 2020',
            since: '5 min read',
            numLikes: 44,
            numComments: 5,
        }, {
            _id: '3',
            ImgSrc: '/Images/Blogs/03.jpg',
            des: 'Emergency medicine research course for the doctors',
            time: '20th November, 2020',
            since: '5 min read',
            numLikes: 44,
            numComments: 5
        }, {
            _id: '4',
            ImgSrc: '/Images/Blogs/03.jpg',
            des: 'Emergency medicine research course for the doctors',
            time: '20th November, 2020',
            since: '5 min read',
            numLikes: 44,
            numComments: 5
        },
    ]
    const SingleBlog: React.FC<{ doc: BlogProps }> = ({ doc }) => {

        return (

            <div className='border dark:border-slate-700 overflow-hidden rounded-lg w-full select-none'>
                <div className='w-full h-[20rem] overflow-hidden relative'>
                    <Image
                        draggable={false}
                        height={300}
                        width={300}
                        src={doc?.ImgSrc}
                        className='w-full object-cover h-full hover:scale-[1.1] duration-200'
                        alt='' />
                </div>
                <div className='space-y-3 p-5 overflow-hidden'>
                    <div className='flex gap-5 items-center whitespace-nowrap'>
                        <div className='flex gap-2 items-center'>
                            <IoCalendar />
                            <p className='text-sm text-gray-500'>{doc?.time}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoTimeOutline />
                            <p className='text-sm text-gray-500'>{doc?.since}</p>
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
                        <Link href={`/admin/blogs/${doc?._id}`} aria-label='more' className='text-blue-600 flex gap-3 items-center whitespace-nowrap'>
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
                    {BlogsDetails?.map((doc) => (
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
