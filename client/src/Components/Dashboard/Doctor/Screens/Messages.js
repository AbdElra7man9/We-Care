import React from 'react'
import { BsCheck2, BsCheck2All, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Conversation, PatientCart } from '../../../Exports'

const Messages = () => {
    const Users = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='container px-5 max-w-full'>
            <div className='grid grid-cols-4 gap-5 h-[85vh]'>
                <div className='border rounded-xl h-full overflow-y-scroll hideScroll p-5'>
                    <label className='relative'>
                        <input type='seach' placeholder='Search' className='border w-full p-4 px-10 outline-none rounded-full text-gray-600' />
                        <span className='absolute inset-0 px-3 text-gray-400'>
                            <BsSearch size={20} />
                        </span>
                    </label>
                    <hr className='my-5' />
                    <div>
                        {Users?.map(card => (
                            <Link to='#' className='py-3 flex justify-between px-3 rounded-xl duration-500 focus:bg-gray-300 hover:bg-gray-200'>
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
                </div>
                <div className='col-span-2 border rounded-xl relative w-full h-[85vh]'>
                    <Conversation />
                </div>
                <PatientCart />
            </div>
        </div>
    )
}

export default Messages
