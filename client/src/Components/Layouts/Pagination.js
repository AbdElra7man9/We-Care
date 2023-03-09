import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
    const Pagination = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='flex justify-end'>
            <div className='border divide-x-2 max-w-96 flex items-center rounded-lg my-10'>
                <Link className='p-3 font-medium'>Prev</Link>
                {Pagination?.map(item => (
                    <Link className='p-3 px-4'>{item}</Link>
                ))}
                <Link className='p-3 font-medium ml-auto'>Next</Link>
            </div>
        </div>
    )
}

export default Pagination
