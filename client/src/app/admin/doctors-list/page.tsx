import DoctorsList from '@Components/Parts/DoctorsList'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Doctors = [
  {
    _id: '1',
    ImgSrc: '/Images/Doctors/01.jpg',
    Name: 'Calvin Carlo',
    Spec: 'Eye Care'
  },
  {
    _id: '2',
    ImgSrc: '/Images/Doctors/02.jpg',
    Name: 'Cristino Murphy',
    Spec: 'M.B.B.S, Gynecologist'
  }, {
    _id: '3',
    ImgSrc: '/Images/Doctors/03.jpg',
    Name: 'Alia Reddy',
    Spec: 'M.B.B.S, Psychotherapist'
  }, {
    _id: '4',
    ImgSrc: '/Images/Doctors/04.jpg',
    Name: 'Toni Kovar',
    Spec: 'M.B.B.S, Orthopedic'
  }, {
    _id: '8',
    ImgSrc: '/Images/Doctors/05.jpg',
    Name: 'Jessica McFarlane',
    Spec: 'M.B.B.S, Dentist'
  }, {
    _id: '5',
    ImgSrc: '/Images/Doctors/06.jpg',
    Name: 'Elsie Sherman',
    Spec: 'M.B.B.S, Gastrologist'
  }, {
    _id: '6',
    ImgSrc: '/Images/Doctors/07.jpg',
    Name: 'Bertha Magers',
    Spec: 'M.B.B.S, Urologist'
  }, {
    _id: '7',
    ImgSrc: '/Images/Doctors/08.jpg',
    Name: 'Louis Batey',
    Spec: 'M.B.B.S, Neurologist'
  },
]
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
              Doctris
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
        <DoctorsList Doctors={Doctors} />
      </div>
    </div>
  )
}
