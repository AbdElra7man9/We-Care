import React, { useState } from 'react'
import { BsCheck2, BsCheck2All, BsSearch } from 'react-icons/bs'
import { Link, useSearchParams } from 'react-router-dom'
import { Conversation, PatientCart, useBreakpoint } from '../../../Exports'

const Messages = () => {
    const Breakpoint = useBreakpoint();
    const [SearchQuery] = useSearchParams();
    const chatId = SearchQuery.get('chatId')
    const userId = SearchQuery.get('userId')
    const [details, setDetails] = useState(false);

    const MobileView = (Breakpoint === 'xs') || (Breakpoint === 'sm') || (Breakpoint === 'md') || (Breakpoint === 'lg') || (Breakpoint === 'xl')

    const Users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const PatientMessageCard = () => {
        return (
            <>
                <div className='xl:px-5'>
                    <label className='relative'>
                        <input type='seach' placeholder='Search' className='border w-full p-4 px-10 outline-none rounded-full text-gray-600' />
                        <span className='absolute inset-0 px-3 text-gray-400'>
                            <BsSearch size={20} />
                        </span>
                    </label>
                </div>
                <hr className='my-5' />
                <div>
                    {Users?.map(card => (
                        <Link to='?chatId=6523&userId=2154651' className='py-3 flex justify-between px-3 rounded-xl duration-500 focus:bg-gray-300 hover:bg-gray-200'>
                            <div className='flex gap-3'>
                                <div className='w-16 h-16 bg-red-800 rounded-full flex items-center justify-center text-white font-bold'>B G</div>
                                <div>
                                    <p className='text-lg font-medium'>Derpy MAX3</p>
                                    <p className='text-sm font-'>Derpy MAX3</p>
                                </div>
                            </div>
                            <div className='flex items-end gap-3 '>
                                <BsCheck2All /><BsCheck2 />
                                <p>WEB</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className='container px-5 max-w-full'>
            <div className='grid grid-cols-4 gap-5 h-[85vh]'>
                {(!chatId && !userId && MobileView || (Breakpoint === 'xxl' || Breakpoint === 'xxxl')) &&
                    <div className='xl:border rounded-xl col-span-4 lg:col-span-4 xl:col-span-1 xxl:col-span-1 h-[90vh]  overflow-y-scroll hideScroll xl:py-5'>
                        <PatientMessageCard />
                    </div>
                }
                {(chatId && userId || (Breakpoint === 'xxl' || Breakpoint === 'xxxl')) &&
                    <div className='col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-2 xl:border rounded-xl relative w-full h-[90vh]'>
                        <Conversation />
                    </div>
                }
                {(details || (Breakpoint === 'xxl' || Breakpoint === 'xxxl')) &&
                    <div className='col-span-4 sm:col-span-2 lg:col-span-1 xxl:col-span-1'>
                        <PatientCart />
                    </div>
                }
            </div>
        </div>
    )
}

export default Messages
