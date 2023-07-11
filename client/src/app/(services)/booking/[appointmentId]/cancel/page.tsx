'use client';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function page() {
  useEffect(() => {
    const sessionId = localStorage.getItem('apiKey') as string;
    if (!sessionId) {
      redirect('/')
    } else {
      toast.success('Appointment cancelled');
      localStorage.removeItem('apiKey');
      localStorage.removeItem('comment');
    }
  }, []);
  return (
    <div className='container'>
      <div className='text-center flex flex-col items-center justify-center gap-y-5 w-full min-h-[30rem]'>
        <span className='text-red-500'>
          <BsFillInfoCircleFill size={80} />
        </span>
        <p className='text-slate-700 text-lg font-semibold'>Your appointment is cancelled</p>
        <p>You have cancelled an appointment, If you have any problem, please contact us</p>
        <p>You can com back again any time</p>
        <Link
          href='/'
          aria-label='Back to home page'
          draggable='false'
          className='border rounded-md h-12 w-36 flex justify-center items-center text-gray-600 font-medium hover:bg-gray-100 active:bg-gray-200 active:scale-95 duration-200'>
          Back Home
        </Link>
      </div>
    </div>
  )
}
