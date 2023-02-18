import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaAddressCard } from 'react-icons/fa'
import { BsTelephoneForwardFill } from 'react-icons/bs'

const RightPartOverFlow = () => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-2 gap-x-5'>
                <div className='p-5'>
                    <p className='text-lg uppercase font-medium text-gray-700 w-3/4'>Approval Requests</p>
                    <p className='text-5xl text-gray-500 font-bold mt-5 mb-3'>26</p>
                    <p className='text-gray-500'>Requests waiting for Approve</p>
                    <Link to='' className='p-3 flex items-center justify-between bg-gray-100 rounded-full my-3'>
                        <p className='text-lg font-semibold'>More</p>
                        <span className='p-2 text-white bg-blue-500 rounded-full'>
                            <BiChevronRight />
                        </span>
                    </Link>
                </div>
                <div className='p-5'>
                    <p className='text-lg uppercase font-medium text-gray-700 w-3/4'>Upcoming Appointment</p>
                    <p className='text-5xl text-gray-500 font-bold mt-5 mb-3'>14</p>
                    <p className='text-gray-500'>Upcoming Appointment</p>
                    <Link to='' className='p-3 flex items-center justify-between bg-gray-100 rounded-full my-3'>
                        <p className='text-lg font-semibold'>More</p>
                        <span className='p-2 text-white bg-blue-500 rounded-full'>
                            <BiChevronRight />
                        </span>
                    </Link>
                </div>
            </div>
            <hr />
            <div className='p-5'>
                <p className='uppercase text-lg text-gray-600'>Clinc Information</p>
                <div className='my-5 space-y-3'>
                    <div className='flex gap-5 items-center text-gray-600'>
                        <FaAddressCard />
                        <p>7898 MArch Ln Unidefined Rechardson,Winsconsin 35697 United stats</p>
                    </div>
                    <div className='flex gap-5 items-center text-gray-600'>
                        <BsTelephoneForwardFill />
                        <p>(255 2544 65454)</p>
                    </div>
                </div>
                <Link to='' className='p-3 flex items-center justify-between bg-gray-100 w-52 rounded-full my-3'>
                    <p className='text-lg font-semibold'>More</p>
                    <span className='p-2 text-white bg-blue-500 rounded-full'>
                        <BiChevronRight />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default RightPartOverFlow
