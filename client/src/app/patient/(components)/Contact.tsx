import Link from 'next/link';
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';

const Contact = () => {
    return (
        <div className='w-full'>
            <h3 className='text-xl font-medium p-5 pl-0'>Cantact Doctor</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[13rem] w-full shadow-gray-100 flex justify-center items-center rounded-lg p-5'>
                    <div className='text-center flex justify-center w-full'>
                        <div className='w-full space-y-4'>
                            <Link href='/' aria-label='home' className='bg-blue-100 text-blue-500 rounded-full flex items-center justify-center border w-20 h-20 mx-auto'>
                                <FaPaperPlane size={25} rotate={45} />
                            </Link>
                            <h2 className='text-xl text-gray-600 font-medium'>New Messages</h2>
                        </div>
                    </div>
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[13rem] w-full shadow-gray-100 flex justify-center items-center rounded-lg p-5'>
                    <div className='text-center flex justify-center w-full'>
                        <div className='w-full space-y-4'>
                            <Link href='/' className='bg-blue-100 text-blue-500 rounded-full flex items-center justify-center border w-20 h-20 mx-auto'>
                                <GiGears size={25} rotate={45} />
                            </Link>
                            <h2 className='text-xl text-gray-600 font-medium'>Latest Proposals</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
