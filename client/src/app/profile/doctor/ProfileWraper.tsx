'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from 'framer-motion';
import { userType } from "@lib/types/user";
import { useSession } from "next-auth/react";

interface SpecProps {
  value: number;

}
export default function ProfileWraper({ children }: { children: React.ReactNode }) {
  const spec: SpecProps = {
    value: 90
  };
  const pathname = usePathname();
  const { data: session } = useSession();
  const userInfo = session?.user as userType;
  const userProfile = (pathname?.includes(`${userInfo.username}`));
  const userSettings = (pathname?.includes('settings'));
  const userReviews = (pathname?.includes('reviews'));
  const userTimetable = (pathname?.includes('timetable'));


  return (
    <>
      <div className='container my-36 max-w-[80rem] flex flex-col gap-y-5'>
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 shadow-gray-100 w-full overflow-hidden rounded-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {userInfo?.profilePicture &&
              <Image
                height={500}
                width={500}
                draggable={false}
                className='w-96 h-[27.5rem] object-cover relative'
                src={userInfo?.profilePicture}
                alt=''
              />
            }
            <div className='text-start w-full flex flex-col justify-center gap-y-5'>
              <p className='text-gray-800 text-lg font-semibold'>Good morning!</p>
              <p className='text-xl font-bold text-blue-600'>Dr. {userInfo.name}</p>
              <p className='text-gray-500 text-sm'>{userInfo.bio}</p>
              <p className="font-semibold">You have <span className="text-blue-600">{userInfo?.patients?.length as number} patients</span>!</p>
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
                href={`/profile/doctor/${userInfo.username}`}
                aria-label='profile'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userProfile && '!bg-blue-500 text-white'}`}>
                Profile
              </Link>
              <Link
                href={`/profile/doctor/reviews`}
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userReviews && '!bg-blue-500 text-white'}`}>
                Reviews
              </Link>
              <Link
                href={`/profile/doctor/timetable`}
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userTimetable && '!bg-blue-500 text-white'}`}>
                Time Table
              </Link>
              <Link
                href={`/profile/doctor/settings`}
                aria-label='settings'
                draggable={false}
                className={`bg-[#F8F9FA] dark:bg-slate-900 py-3 font-medium ${userSettings && '!bg-blue-500 text-white'}`}>
                settings
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
