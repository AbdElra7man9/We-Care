import React from 'react'
import { BsSearch, BsCheck, BsX } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import Image from 'next/image';
import Table from './Table';
interface PatientListProps {
  _id: string;
  img: string;
  name: string;
  age: string;
  email: string;
  phone: string;
  gender: string;
  createdAt: string;
  fees: string;
}
export default function page() {

  return (
    <div className='container px-2 max-w-full'>
      <p className='text-lg font-semibold py-5'>Appointment</p>
      <div className='w-full space-y-2'>

        <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900">

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch />
            </div>
            <input
              type="text"
              className="block outline-none p-2 pl-10 text-sm text-gray-900 border border-gray-300 
                         rounded-lg w-80 bg-gray-50 dark:bg-slate-900 dark:border-slate-500 dark:text-gray-300 dark:placeholder:text-gray-400
                          focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users" />
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:shadow-slate-700">
          <Table />
        </div>
        {/* <Pagination /> */}
      </div>
    </div>
  )
}
