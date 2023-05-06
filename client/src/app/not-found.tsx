import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function notFounded() {
    return (
        <div className='container max-w-2xl'>
            <Image
                height={500}
                width={500}
                src='/Images/error.svg'
                className='flex justify-center mx-auto'
                alt='Error'
            />
            <div className='text-center flex flex-col justify-center gap-y-5 py-16'>
                <p className='font-semibold text-2xl'>Page Not Found</p>
                <p className='text-gray-500'>Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                <Link href='/'
                    className='bg-blue-600 text-white p-2 px-6 rounded-md flex justify-center'
                >Go To Home
                </Link>
            </div>
        </div>
    )
}
