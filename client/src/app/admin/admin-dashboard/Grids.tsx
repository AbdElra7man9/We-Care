'use client';
import { useAppSelector } from '@Hooks/useRedux';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import Link from 'next/link';
import React from 'react'
import { BsFillGridFill } from 'react-icons/bs';
import { FaPaperPlane, FaUser, FaUsers } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';
import { IoHome } from 'react-icons/io5';
const Grids = () => {
    const userInfo = useAppSelector(selectCurrentUser)
    return (
        <div className='w-full'>
            <h3 className='text-xl font-medium p-5 pl-0'>Cantact Doctor</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-4 gap-5'>
                <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[13rem] w-full shadow-gray-100 flex justify-center items-center rounded-lg p-5'>
                    <div className='text-center flex justify-center w-full'>
                        <div className='w-full space-y-4'>
                            <Link href='/' aria-label='home' className='bg-blue-100 text-blue-500 rounded-full flex items-center justify-center border w-20 h-20 mx-auto'>
                                <IoHome size={25} rotate={45} />
                            </Link>
                            <h2 className='text-xl text-gray-600 font-medium'>Home</h2>
                        </div>
                    </div>
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[13rem] w-full shadow-gray-100 flex justify-center items-center rounded-lg p-5'>
                    <div className='text-center flex justify-center w-full'>
                        <div className='w-full space-y-4'>
                            <Link href='/admin/admin-dashboard' className='bg-blue-100 text-blue-500 rounded-full flex items-center justify-center border w-20 h-20 mx-auto'>
                                <BsFillGridFill size={25} rotate={45} />
                            </Link>
                            <h2 className='text-xl text-gray-600 font-medium'>Dashboard</h2>
                        </div>
                    </div>
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[13rem] w-full shadow-gray-100 flex justify-center items-center rounded-lg p-5'>
                    <div className='text-center flex justify-center w-full'>
                        <div className='w-full space-y-4'>
                            <Link href='/admin/pending-doctors' className='bg-blue-100 text-blue-500 rounded-full flex items-center justify-center border w-20 h-20 mx-auto'>
                                <FaUsers size={25} rotate={45} />
                            </Link>
                            <h2 className='text-xl text-gray-600 font-medium'>Pending Doctor</h2>
                        </div>
                    </div>
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[13rem] w-full shadow-gray-100 flex justify-center items-center rounded-lg p-5'>
                    <div className='text-center flex justify-center w-full'>
                        <div className='w-full space-y-4'>
                            <Link href={`//${userInfo.username}`} className='bg-blue-100 text-blue-500 rounded-full flex items-center justify-center border w-20 h-20 mx-auto'>
                                <FaUser size={25} rotate={45} />
                            </Link>
                            <h2 className='text-xl text-gray-600 font-medium'>Profile</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grids
