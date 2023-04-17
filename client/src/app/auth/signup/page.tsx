import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Form from './Form';
const SignUp = () => {

    return (
        <div className='container px-0 max-w-4xl flex place-content-center h-[80%] lg:mt-20 mb-5'>
            <div className='max-w-md'>
                <div className='lg:border border-gray-300 p-5 px-8 items-center text-center rounded-lg lg:bg-white dark:bg-slate-900 dark:border-slate-500'>
                    <Link href="/" aria-label='home'>
                        <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                            <Image
                                height={100}
                                width={100}
                                draggable={false}
                                className='w-10 h-10 rounded-xl'
                                src='/Images/logo-icon.png'
                                alt=''
                            />
                            <p className='text-2xl font-bold dark:text-white'>Doctris</p>
                        </div>
                    </Link>
                    <p className='text-xl font-medium text-gray-600 mb-5'>
                        Sign up Book an appointment whith you doctor and chat with him.
                    </p>

                    <Form />
                </div>
            </div>
        </div>
    )
}

export default SignUp
