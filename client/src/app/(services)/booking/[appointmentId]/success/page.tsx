'use client'
import { useOnSuccessMutation } from '@Redux/APIs/PaymentApi'
import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { FaStar } from 'react-icons/fa'

export default function page() {
  const [OnSuccess] = useOnSuccessMutation();
  const params = useParams() as { appointmentId: string };
  const appointmentId = params.appointmentId
  useEffect(() => {
    const sessionId = localStorage.getItem('apiKey') as string;
    const comment = localStorage.getItem('comment') as string;
    if (!sessionId) {
      redirect('/')
    } else {
      OnSuccess({ appointmentId, sessionId, comment }).unwrap()
        .then(() => {
          toast.success('Appointment booked successfully');
          localStorage.removeItem('apiKey');
          localStorage.removeItem('comment');
        }).catch(() => {
          toast.error('An error happen please check your appointments list or contact us')
        });
    }
  }, []);
  return (
    <div className='container'>
      <div className='text-center flex flex-col items-center justify-center gap-y-5 w-full min-h-[30rem]'>
        <span className='text-orange-500'>
          <FaStar size={80} />
        </span>
        <p className='text-slate-700 text-lg font-semibold'>Thank you for booking!</p>
        <p>You have successfully booked an appointment</p>
        <p>We will notify you in time</p>
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
