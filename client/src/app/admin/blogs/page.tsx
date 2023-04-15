import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Blogs from './Blogs'

export default function page() {
    return (
        <div className=''>
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
                <Link href='/' className='bg-blue-700 text-white font-semibold rounded-md p-3 px-5'>
                    Add Blog
                </Link>
            </div>
            <Blogs />
        </div>
    )
}
