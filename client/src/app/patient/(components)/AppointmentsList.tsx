'use client';
import React from 'react'
// import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useGetAllMyAppointmentsQuery } from '@Redux/APIs/AppointmentsApi';
import moment from 'moment';
import Image from 'next/image';
interface AppointmentsListProps {
    status: 'past' | 'now';
}
const AppointmentsList = ({ status }: AppointmentsListProps) => {
    const { data } = useGetAllMyAppointmentsQuery({ limit: 5, page: 1 });
    const { pastAppointment, upcomingApointments } = data || {}
    return (
        <div>
            <div className='flex justify-between'>
                <h3 className='text-lg font-medium dark:text-slate-200'>{(status === 'now') ? 'Upcoming Appointment' : 'Past Appointments'}</h3>
                {/* <BiDotsHorizontalRounded /> */}
            </div>
            <div className='h-full overflow-scroll hideScroll'>
                {(status === 'past') ? pastAppointment?.map(spec => (
                    <div key={spec?._id} className='border border-gray-200 dark:border-slate-700 w-full rounded-md flex justify-between items-center p-3 my-4'>
                        <div className='flex gap-3 items-center'>
                            {spec?.doctor?.profilePicture &&
                                <Image
                                    height={100}
                                    width={100}
                                    className='w-14 h-14 rounded-full object-cover'
                                    src={spec?.doctor?.profilePicture}
                                    alt={spec?.doctor?.name as string}
                                />
                            }
                            <div>
                                <p className='font-medium dark:text-slate-300'>{spec?.doctor?.name}</p>
                                <p className='text-gray-500 text-sm'>{spec?.doctor.specialization}</p>
                            </div>
                        </div>
                        <span>{moment(spec?.date).fromNow()}</span>
                    </div>
                ))
                    :
                    (status === 'now') &&
                    upcomingApointments?.map(spec => (
                        <div key={spec?._id} className='border border-gray-200 dark:border-slate-700 w-full rounded-md flex justify-between items-center p-3 my-4'>
                            <div className='flex gap-3 items-center'>
                                {spec?.doctor?.profilePicture &&
                                    <Image
                                        height={100}
                                        width={100}
                                        className='w-14 h-14 rounded-full object-cover'
                                        src={spec?.doctor?.profilePicture}
                                        alt={spec?.doctor?.name as string}
                                    />
                                }
                                <div>
                                    <p className='font-medium dark:text-slate-300'>{spec?.doctor?.name}</p>
                                    <p className='text-gray-500 text-sm'>{spec?.doctor.specialization}</p>
                                </div>
                            </div>
                            <span>{moment(spec?.date).fromNow()}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AppointmentsList
