import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Table from './Table'

export default function page() {

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg font-semibold my-3'>Doctor Wainting for Confirmation</p>
                    <div className='flex gap-3 items-center justify-center'>
                        <Link
                            href='/'
                            aria-label='home'
                            className='uppercase hover:text-blue-500 hover:underline'>
                            We Care
                        </Link>
                        <BiChevronRight />
                        <Link
                            href='/admin/pending-doctors'
                            aria-label='booking appointment'
                            className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
                        >
                            Reviews
                        </Link>
                    </div>
                </div>
                {/* <button
                    aria-label='Add BLOG'
                    // onClick={() => dispatch(FeatureAction.setModalAddBlog(true))}
                    className='border font-semibold rounded-md p-2 px-7'>
                    Todat
                </button> */}
            </div>
            <Table />
        </div>
    )
}
