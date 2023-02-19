import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { SplineChart } from '../../../Exports'
import { BiChevronRight } from 'react-icons/bi';
const Payment = () => {
    const Users = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='container px-5 max-w-full'>
            <p className='text-lg font-semibold py-5'>Recent Treatment</p>
            <div className='grid grid-cols-5 gap-5'>
                <div className='w-full col-span-3 space-y-3'>
                    {Users?.map(patient => (
                        <div className='w-full grid grid-cols-8 items-center my-3 rounded-xl bg-gray-50 text-lg font-medium text-gray-600'>
                            <div className='flex gap-3 col-span-3 px-7 py-5'>
                                <img className='w-12 h-12 rounded-full'
                                    src='https://res.cloudinary.com/abdo9/image/upload/v1676052171/profile_bikmhe.jpg' alt='' />
                                <div>
                                    <p className='text-lg text-gray-600 font-bold'>Diana Cooper</p>
                                    <p className='text-sm font-medium text-gray-500'>Root Canal</p>
                                </div>
                            </div>
                            <span className='col-span-2'>
                                $ 50
                            </span>
                            <span>Paid</span>
                            <span>24 Nov 2019</span>
                            <span>
                                <button>
                                    <BsThreeDots size={20} />
                                </button>
                            </span>
                        </div>
                    ))}

                </div>
                <div className='w-full col-span-2 space-y-5'>
                    <SplineChart />

                    <div className='grid grid-cols-2 gap-6 w-full h-96 p-10'>
                        <div className='space-y-6'>
                            <p className='text-lg text-gray-700 uppercase font-medium'>Total Patient</p>
                            <p className='text-5xl mt-5 text-gray-500 font-semibold'>$23,000</p>
                            <p className='text-xl font-light'>This Month So Far</p>
                            <Link to='' className='p-3 flex items-center justify-between bg-gray-100 w-52 rounded-full my-3'>
                                <p className='text-lg font-semibold'>More</p>
                                <span className='p-2 text-white bg-blue-500 rounded-full'>
                                    <BiChevronRight />
                                </span>
                            </Link>
                        </div>
                        <div className='space-y-6'>
                            <p className='text-lg text-gray-700 uppercase font-medium'>Total Payment</p>
                            <p className='text-5xl mt-5 text-gray-500 font-semibold'>$23,000</p>
                            <p className='text-xl font-light'>Pervios Months</p>
                            <Link to='' className='p-3 flex items-center justify-between bg-gray-100 w-52 rounded-full my-3'>
                                <p className='text-lg font-semibold'>More</p>
                                <span className='p-2 text-white bg-blue-500 rounded-full'>
                                    <BiChevronRight />
                                </span>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Payment
