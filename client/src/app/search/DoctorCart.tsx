'use client';
import { useGetDoctorsQuery } from '@Redux/APIs/DoctorApi'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';
import { FC } from 'react'
import Link from 'next/link';

interface DoctorCartProps { }

const DoctorCart: FC<DoctorCartProps> = () => {
    const { data } = useGetDoctorsQuery({ page: 1, limit: 10 });
    const doctors = data?.doctors;
    const [value, onChange] = useState(new Date());
    const allowedDates = [
        new Date('2022-01-01'),
        new Date('2022-01-02'),
        new Date('2022-01-03'),
        new Date('2023-04-16'),
        new Date('2023-04-17'),
        new Date('2023-04-11'),
    ];
    function isDateDisabled({ date }: { date: Date }) {
        // Check if the given date is in the allowedDates array
        return !allowedDates.some((allowedDate) =>
            allowedDate.toDateString() === date.toDateString()
        );
    }
    if (!data) return null;

    return (
        <div className='w-full col-span-3 flex flex-col gap-5'>
            {doctors?.map((doc) => (
                <div key={doc._id} className='flex justify-between gap-5 h-96 w-full p-3 rounded-md dark:bg-slate-800'>
                    <div className='flex gap-5'>
                        <Image
                            height={400}
                            width={400}
                            className='w-64 h-64 rounded-full p-5'
                            src={doc.profilePicture as string}
                            alt={doc.name as string}
                        />
                        <div className='flex flex-col gap-y-5'>
                            <p className='text-blue-500 text-xl font-medium'>{doc.name}</p>
                            <p className='font-medium text-gray-400'>{doc.specialization}</p>
                            <p>{doc.averageRating}</p>
                            <p>{doc.name}</p>
                            <Link href={`patient/booking-appointment/${doc._id}/clinc`}
                                className='bg-blue-600 text-white rounded-md p-2 px-5 my-5'>
                                Make oppountment
                            </Link>
                        </div>
                    </div>
                    <Calendar
                        className=''
                        tileDisabled={isDateDisabled}
                        onChange={onChange}
                        value={value} />
                </div>
            ))}

        </div>
    );
};

export default DoctorCart;
