'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from 'framer-motion';
import { useAppSelector } from "@Hooks/useRedux";
import { selectCurrentUser } from "@Redux/Slices/UserSlice";

interface SpecProps {
  value: number;

}
export default function ProfileWraper({ children }: { children: React.ReactNode }) {
  const spec: SpecProps = {
    value: 90
  };
  const pathname = usePathname();
  const userInfo = useAppSelector(selectCurrentUser)
  const profile = (pathname?.includes(`${userInfo.username}`));
  const profileSettings = (pathname?.includes('settings'));


  return (
    <>
      <div className='container my-36 max-w-[80rem] flex flex-col gap-y-5'>
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 shadow-gray-100 w-full overflow-hidden rounded-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Image
              height={300}
              width={300}
              draggable={false}
              className='w-96 h-full object-cover relative'
              src='/Images/Clients/09.jpg'
              alt=''
            />
            <div className='text-start w-full flex flex-col justify-center gap-y-5'>
              <p className='text-gray-800 text-lg font-semibold'>Good morning!</p>
              <p className='text-xl font-bold text-blue-600'>Dr. Christopher Burrell</p>
              <p className='text-gray-500 text-sm'>
                {`Great doctor if you need your family member to get effective immediate assistance, 
                emergency treatment or a simple consultation.`}
              </p>
              <p className="font-semibold">You have <span className="text-blue-600">18 patients</span> remaining today!</p>
              <div className='mb-5'>
                <div className='flex justify-between text-gray-500 mb-2'>
                  <p className='font-medium text-gray-600'>Complete your profile</p>
                  <p className='font-medium'>{spec?.value} %</p>
                </div>
                <div
                  className='bg-gray-100 w-full rounded-full overflow-hidden border h-4 dark:bg-slate-900 dark:border-slate-500'>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${spec.value}%` }}
                    transition={{ ease: "easeOut", duration: 1 }} className='bg-blue-500 h-full rounded-full'
                  >
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 shadow-gray-100 overflow-hidden rounded-lg col-span-2'>
          <div className='container px-0 max-w-full rounded-lg overflow-hidden'>
            <div className='grid grid-cols-2 lg:grid-cols-4 text-center text-lg border-b dark:border-slate-600'>
              <Link
                href={`/profile/${userInfo.username}`}
                aria-label='profile'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${profile && '!bg-blue-500 text-white'}`}>
                Profile
              </Link>
              <Link
                href='/profile/settings'
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${profileSettings && '!bg-blue-500 text-white'}`}>
                Reviews
              </Link>
              <Link
                href='/profile/settings'
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${profileSettings && '!bg-blue-500 text-white'}`}>
                Location
              </Link>
              <Link
                href='/profile/settings'
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${profileSettings && '!bg-blue-500 text-white'}`}>
                Time Table
              </Link>
            </div>
            <div className='p-5'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
