'use client';
import { useSearchQuery } from '@Redux/APIs/DoctorApi'
import React, { useState, FC } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { BsFillCameraVideoFill, BsFillFileEarmarkRuledFill, BsHeart } from 'react-icons/bs';
import { CiLocationOn, CiTimer } from 'react-icons/ci';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import ShowRating from '@Components/Parts/ShowRating';
import { useAppSelector } from '@Hooks/useRedux';
import { docsConfig } from '@config/docsConfig';

interface DoctorCartProps { }

const DoctorCart: FC<DoctorCartProps> = () => {
    const query = useSearchParams();
    const keyword = query?.get('keyword') as string;
    const { rangeValues, gender, specialization } = useAppSelector(state => state.Features);
    console.log({ rangeValues, gender, specialization })
    const { data } = useSearchQuery({ page: 1, limit: 10, keyword, gender, maxFees: rangeValues[0], minFees: rangeValues[1], specialization });
    const doctors = data?.doctors;
    const Router = useRouter();
    const [value, onChange] = useState(new Date());
    const allowedDates = [
        new Date('2022-01-01'),
        new Date('2022-01-02'),
        new Date('2022-01-03'),
        new Date('2023-04-16'),
        new Date('2023-06-25'),
        new Date('2023-06-24'),
    ];
    function isDateDisabled({ date }: { date: Date }) {
        // Check if the given date is in the allowedDates array
        return !allowedDates.some((allowedDate) =>
            allowedDate.toDateString() === date.toDateString()
        );
    };

    if (!data) return null;

    return (
        <div className='w-full col-span-3 flex flex-col gap-5'>
            {doctors?.map((doc) => {
                const [isCalender, setIsCalender] = useState<boolean>(false);
                return (
                    <div key={doc?._id}>
                        <div className='border dark:border-slate-700 overflow-hidden rounded-lg w-full select-none flex gap-5 relative'>
                            <div className='h-[20rem] overflow-hidden relative'>
                                {doc.profilePicture &&
                                    <Image
                                        height={500}
                                        width={500}
                                        draggable='false'
                                        src={doc?.profilePicture}
                                        className='object-cover h-full w-80'
                                        alt=''
                                    />
                                }
                                <button
                                    aria-label='save'
                                    className='w-10 h-10 absolute top-0 m-3 right-0 rounded-full bg-red-100 shadow-red-600 drop-shadow-xl text-red-500
                                            hover:bg-red-500 hover:text-white duration-150 flex justify-center items-center shadow-2xl'
                                >
                                    <BsHeart size={15} />
                                </button>
                            </div>
                            <div className='space-y-3 p-5 overflow-hidden'>
                                <div>
                                    <p className='text-lg font-medium text-gray-800 dark:text-white'>Dr. {doc?.name}</p>
                                    <p className='text-sm text-gray-500 dark:text-gray-400'>{doc?.specialization}</p>
                                </div>
                                <ShowRating Rating={doc?.averageRating as number} />
                                <div className='space-y-3'>
                                    <div className='flex items-center gap-3'>

                                        <span className='text-blue-500'> <CiLocationOn size={20} /></span>
                                        <p className='text-gray-500'>63, PG Shustoke, UK</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <span className='text-blue-500'> <CiTimer size={20} /></span>
                                        <p className='text-gray-500'>Mon: 2:00PM - 6:00PM</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <span className='text-blue-500'> <HiOutlineCurrencyDollar size={20} /></span>
                                        <p className='text-gray-500'>$ {doc?.fees} USD / Visit</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    {docsConfig.SocialIcons?.map((item, index) => (
                                        <Link
                                            href='/'
                                            aria-label='item'
                                            key={index}
                                            className='w-10 h-10 rounded-full bg-blue-100 shadow-blue-600 shadow-md drop-shadow-xl dark:bg-slate-800 dark:hover:bg-blue-800
                                        text-blue-500 hover:bg-blue-500 hover:text-white duration-150 flex justify-center items-center'
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 mr-10 ml-auto mt-10 justify-end-end'>
                                <Link
                                    href={`/patient/booking-appointment/${doc?._id}/online`}
                                    onClick={() => { setIsCalender(true) }}
                                    draggable={false}
                                    className='text-teal-800 text-sm font-bold p-3 rounded-lg bg-yellow-400 flex justify-center gap-2 w-52 active:scale-95 duration-200'>
                                    <BsFillCameraVideoFill size={20} />
                                    <p className='capitalize'>Book video consult</p>
                                </Link>
                                <Link
                                    href={`/patient/booking-appointment/${doc?._id}/clinc`}
                                    onClick={() => { setIsCalender(true) }}
                                    draggable={false}
                                    className='text-white text-sm font-bold p-3 rounded-lg bg-teal-700 flex justify-center gap-2 w-52 active:scale-95 duration-200'>
                                    <BsFillFileEarmarkRuledFill size={20} />
                                    <p className='capitalize'>Book Hospital visit</p>
                                </Link>
                            </div>
                            {/* {isCalender &&
                                <>
                                    <div className='fixed inset-0 z-10' onClick={() => { setIsCalender(false) }}></div>
                                    <Calendar
                                        className='absolute z-20 right-[17rem] mt-2'
                                        tileDisabled={isDateDisabled}
                                        onChange={onChange}
                                        value={value}
                                    />
                                </>
                            } */}
                        </div>
                    </div>
                )
            })}

        </div >
    );
};

export default DoctorCart;
