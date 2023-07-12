import Footer from '@Components/app/Footer'
import Header from '@Components/app/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import BlogsData from './BlogsData'

interface conatctProps {
  Icon: React.ReactNode;
  Title: string;
  Des: string;
  contact: string;
}

export default function page() {
  const Spici: React.FC<{ item: conatctProps }> = ({ item }) => {
    return (
      <div className='space-y-5 flex flex-col justify-center items-center'>
        <div
          className='bg-blue-100 flex justify-center items-center h-16 w-16 rounded-md text-blue-600 dark:bg-slate-800 dark:text-blue-700'>
          {item.Icon}
        </div>
        <div className='text-center space-y-4'>
          <p className='font-medium text-lg text-gray-800 dark:text-slate-100'>{item.Title}</p>
          <p className='text-sm text-gray-500 dark:text-slate-500'>{item.Des}</p>
          <p className='text-sm text-blue-500 dark:text-blue-500'>{item.contact}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="dark:bg-slate-900">
      <div className='h-[30rem] md:h-[40rem] duration-200 container max-w-full px-0 relative '>
        <Image
          height={800}
          width={800}
          className='h-full w-full object-cover'
          src='/Images/bg-02.jpg'
          alt=''
        />
        <div className="absolute inset-0 w-full h-full bg-[rgba(60,72,88,.7)]"></div>
        <div
          className='container px-5 duration-300 absolute inset-0 flex justify-center items-center text-white '
        >
          <div className='space-y-5 text-center font-bold'>
            <h4 className='leading-normal text-3xl lg:text-5xl'>
              Blogs & News
            </h4>
            <h5 className='leading-snug text-gray-400 font-normal'>
              Great doctor if you need your family member to get effective immediate assistance,

              <br /> treatment or a simple consultation.
            </h5>
            <div className='py-3 flex justify-center'>
              <div className='flex gap-3 items-center justify-center bg-white text-gray-600 p-2 px-5 rounded-md'>
                <Link
                  href='/'
                  aria-label='home'
                  className='uppercase hover:text-blue-500 hover:underline'>
                  We Care
                </Link>
                <BiChevronRight />
                <Link
                  href='/contact'
                  aria-label='Contact us'
                  className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-[100rem] my-32'>
        <BlogsData />
      </div>
    </div >
  )
}
