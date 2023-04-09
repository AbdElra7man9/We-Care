'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";

export default function MainBookingWrapper({
    children
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const atClinc = (pathname.includes('clinc'));
    const atOnline = (pathname.includes('online'));
    return (
        <div className="dark:bg-slate-900 pb-20 select-none">
            <div className='py-20 md:py-32 mb-10 bg-[#F8F9FA] dark:bg-slate-800 dark:text-white'>
                <div className='text-center space-y-5'>
                    <p className='font-semibold text-2xl'>Book an appointment</p>
                    <p className='text-gray-500 leading-loose'>
                        Great doctor if you need your family member to
                        get effective immediate assistance,
                        <br />
                        emergency treatment or a simple consultation.
                    </p>
                    <div>
                        <div className='flex gap-3 items-center justify-center'>
                            <Link
                                href='/'
                                aria-label='home'
                                className='uppercase font-semibold hover:text-blue-500 hover:underline'>
                                Doctris
                            </Link>
                            <BiChevronRight />
                            <Link
                                href='/patient/booking-appointment/clinc'
                                aria-label='booking appointment'
                                className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
                            >
                                Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container px-0 md:max-w-3xl md:border mt-5 rounded-lg overflow-hidden dark:bg-slate-900 dark:border-slate-500'>
                <div className='grid grid-cols-2 text-center border-b dark:border-slate-500'>
                    <Link
                        href='/patient/booking-appointment/clinc'
                        aria-label='booking appointment'
                        className={`bg-[#F8F9FA] py-3 font-medium dark:bg-slate-900 dark:text-white ${atClinc && '!bg-blue-500 text-white'}`}
                    >
                        Clinc Appointment
                    </Link>
                    <Link
                        href='/patient/booking-appointment/online'
                        aria-label='booking appointment'
                        className={`bg-[#F8F9FA] py-3 dark:bg-slate-900 dark:text-white font-medium ${atOnline && '!bg-blue-500 text-white'}`}
                    >
                        Online Appointment
                    </Link>
                </div>
                <div className='p-5'>
                    {children}
                </div>
            </div>
        </div>
    )
}
