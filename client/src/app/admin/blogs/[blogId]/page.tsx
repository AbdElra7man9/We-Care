import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { MdAccessTimeFilled } from 'react-icons/md'
import AddComment from './AddComment'
const BlogDetails = {
  _id: '1',
  ImgSrc: '/Images/Blogs/01.jpg',
  title: 'You can easily connect to doctor and make a treatment',
  des: 'You can easily connect to doctor and make a treatment You can easily connect to doctor and make a treatmen You can easily connect to doctor and make a treatment You can easily connect to doctor and make a treatment You can easily connect to doctor and make a treatment You can easily connect to doctor and make a treatment',
  time: '20th November, 2020',
  since: '5 min read',
  numLikes: 44,
  numComments: 5,
  user: 'Calvin Carlo'
}
const comments = [
  {
    user: {
      name: 'Lorenzo Peterson',
      Image: '/Images/clients/01.jpg'
    },
    content: 'Lorenzo Peterson',
    createdAt: '20th November, 2020',

  }
]
const BlogsDetails = [
  {
    _id: '1',
    ImgSrc: '/Images/Blogs/01.jpg',
    des: 'You can easily connect to doctor and make a treatment',
    time: '20th November, 2020',
    since: '5 min read',
    numLikes: 44,
    numComments: 5
  }, {
    _id: '2',
    ImgSrc: '/Images/Blogs/02.jpg',
    des: 'Lockdowns lead to fewer people seeking medical care',
    time: '20th November, 2020',
    since: '5 min read',
    numLikes: 44,
    numComments: 5,
  }, {
    _id: '3',
    ImgSrc: '/Images/Blogs/03.jpg',
    des: 'Emergency medicine research course for the doctors',
    time: '20th November, 2020',
    since: '5 min read',
    numLikes: 44,
    numComments: 5
  }, {
    _id: '4',
    ImgSrc: '/Images/Blogs/03.jpg',
    des: 'Emergency medicine research course for the doctors',
    time: '20th November, 2020',
    since: '5 min read',
    numLikes: 44,
    numComments: 5
  },
]
export default function page() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-lg font-semibold my-3'>{BlogDetails.title}</p>
          <div className='flex items-center gap-4 text-gray-400'>
            <div className='flex items-center gap-2'>
              <BsPerson />
              <p>{BlogDetails.user}</p>
            </div>
            <div className='flex items-center gap-2'>
              <MdAccessTimeFilled />
              <p>{BlogDetails.time}</p>
            </div>
          </div>
        </div>
        <div className='flex gap-3 items-center justify-center'>
          <Link
            href='/'
            aria-label='home'
            className='uppercase hover:text-blue-500 hover:underline'>
            Doctris
          </Link>
          <BiChevronRight />
          <Link
            href='/patient/booking-appointment/clinc'
            aria-label='booking appointment'
            className='uppercase font-medium hover:text-blue-500 hover:underline'
          >
            Blog
          </Link>
          <BiChevronRight />
          <Link
            href='/patient/booking-appointment/clinc'
            aria-label='booking appointment'
            className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
          >
            Blog Details
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-3 my-5'>
        <div className='col-span-2 border rounded-md'>
          <Image
            height={600}
            width={600}
            draggable={false}
            src={BlogDetails.ImgSrc}
            alt={BlogDetails.des}
            className='w-full h-[30rem] object-cover'
          />
          <div className='p-5'>
            <p className='text-gray-500'>{BlogDetails.des}</p>
            <div className='my-5'>
              <h2 className='py-3 font-medium text-lg'>Comments :</h2>
              {comments.map(comment => (
                <div >
                  <div className='flex items-center gap-3'>
                    <Image
                      height={100}
                      width={100}
                      draggable={false}
                      src={comment.user.Image}
                      alt={comment.user.name}
                      className='w-14 h-14 rounded-full object-cover'
                    />
                    <span>
                      <p className='font-medium text-lg text-gray-600'>{comment.user.name}</p>
                      <p className='text-slate-500 text-sm'>{comment.createdAt}</p>
                    </span>
                  </div>
                  <div className='bg-sky-50 p-5 w-full rounded-md my-2'>{comment.content}</div>
                </div>
              ))}
            </div>
            <div className='my-5'>
              <h2 className='py-3 font-medium text-lg'>Leave A Comment :</h2>
              <AddComment />
            </div>
          </div>
        </div>
        <div className='col-span-1 border rounded-md p-5'>
          <h2 className='py-3 font-medium text-lg'>Recent Blogs</h2>
          {BlogsDetails?.map((doc) => (
            <div key={doc?._id} className='flex gap-3 my-4'>
              <Image
                height={200}
                width={200}
                draggable={false}
                src={doc.ImgSrc}
                alt={doc.des}
                className='w-52 h-24 rounded-lg object-cover'
              />
              <span>
                <p className='font-medium text-lg text-gray-600'>{doc.des}</p>
                <p className='text-slate-500 text-sm'>{doc.time}</p>
              </span>
            </div>
          ))}
          {/* <h2 className='py-3 font-medium text-lg'>Tags Cloud</h2> */}

        </div>
      </div>
    </>
  )
}
