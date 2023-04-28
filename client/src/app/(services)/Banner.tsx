import { BlogType } from '@lib/types/blog';
import Link from 'next/link'
import { FC } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { IoCalendar, IoTimeOutline } from 'react-icons/io5';

interface ServicesWrapperProps {
    title: string;
    str1: string;
    str2: string;
    pageLink?: string;
    isdate?: Boolean;
    doc?: BlogType;
}

const Banner: FC<ServicesWrapperProps> = ({ title, str1, str2, isdate, pageLink, doc }) => {
    return (
        <div className="dark:bg-slate-900 pb-20 select-none">
            <div className='py-20 md:py-32 mb-10 bg-[#F8F9FA] dark:bg-slate-800 dark:text-white'>
                <div className='text-center space-y-5'>
                    <p className='font-semibold text-2xl'>{title}</p>
                    <p className='text-gray-500 leading-loose'>
                        {str1}
                        <br />
                        {str2}
                    </p>
                    <div>
                        {isdate ?
                            <>
                                <div className='flex gap-5 items-center justify-center whitespace-nowrap'>
                                    <div className='flex gap-2 items-center'>
                                        <IoCalendar />
                                        <p className='text-sm text-gray-500'>{doc?.user?.name}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <IoTimeOutline />
                                        <p className='text-sm text-gray-500'>{doc?.createdAt}</p>
                                    </div>
                                </div>
                            </> :
                            <div className='flex gap-3 items-center justify-center'>
                                <Link
                                    href='/'
                                    aria-label='home'
                                    className='uppercase font-semibold hover:text-blue-500 hover:underline'>
                                    Doctris
                                </Link>
                                <BiChevronRight />
                                <Link
                                    href='/patient/booking-appointment/clinc'
                                    aria-label='booking appointment'
                                    className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
                                >
                                    {pageLink}
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner