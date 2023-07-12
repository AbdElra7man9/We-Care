import DoctorsList from '@Components/Parts/DoctorsList'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Data from './Data'

export default function page() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-lg font-semibold my-3'>Doctors</p>
          <div className='flex gap-3 items-center justify-center'>
            <Link
              href='/'
              aria-label='home'
              className='uppercase hover:text-blue-500 hover:underline'>
              We Care
            </Link>
            <BiChevronRight />
            <Link
              href='/patient/booking-appointment/clinc'
              aria-label='booking appointment'
              className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
            >
              Doctors
            </Link>
          </div>
        </div>
        <Link
          aria-label='Add New Doctor'
          href='/auth/doctor/signup'
          // onClick={() => dispatch(FeatureAction.setModalAddBlog(true))}
          className='bg-blue-500 text-white font-semibold rounded-md p-2 px-7'>
          Add New Doctor
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-8'>
        <Data />
      </div>
    </div>
  )
}
