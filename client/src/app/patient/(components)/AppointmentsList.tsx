'use client';
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaHeartbeat, FaVirus } from 'react-icons/fa';
import { BsClipboardCheck } from 'react-icons/bs'
import { RiStethoscopeFill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
const AppointmentsList = () => {
    const appointemnts = [
        {
            _id: '1',
            icon: <FaHeartbeat size={20} style={{ color: 'blue' }} />,
            specailzation: 'Cardiogram',
            dr: 'Dr. Calvin Carlo',
            date: '10 Dec'
        }, {
            _id: '2',
            icon: <RiStethoscopeFill size={20} style={{ color: 'green' }} />,
            specailzation: 'Checkup',
            dr: 'Dr. Cristino Murphy',
            date: '5 Dec'
        }, {
            _id: '3',
            icon: <FaVirus size={20} style={{ color: 'orange' }} />,
            specailzation: 'Covid Test',
            dr: 'Dr. Alia Reddy',
            date: '20 Dec'
        }, {
            _id: '4',
            icon: <BsClipboardCheck size={20} style={{ color: 'brown' }} />,
            specailzation: 'Dentist',
            dr: 'Dr. Toni Kovar',
            date: '18 Dec'
        }, {
            _id: '5',
            icon: <AiFillEye size={20} style={{ color: '#65C2F1' }} />,
            specailzation: 'Eye Test',
            dr: 'Dr. Jessica McFarlane',
            date: '15 Dec'
        }
    ]
    return (
        <div>
            <div className='flex justify-between'>
                <h3 className='text-lg font-medium dark:text-slate-200'>Appointment List</h3>
                <BiDotsHorizontalRounded />
            </div>
            <div className='h-full overflow-scroll hideScroll'>
                {appointemnts?.map(spec => (
                    <div key={spec?._id} className='border border-gray-200 dark:border-slate-700 w-full rounded-md flex justify-between items-center p-3 my-4'>
                        <div className='flex gap-3 items-center'>
                            {spec?.icon}
                            <div>
                                <p className='font-medium dark:text-slate-300'>{spec?.dr}</p>
                                <p className='text-gray-500 text-sm'>{spec?.specailzation}</p>
                            </div>
                        </div>
                        <span>{spec?.date}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppointmentsList
