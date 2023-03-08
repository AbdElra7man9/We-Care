import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaHeartbeat, FaVirus } from 'react-icons/fa';
import { BsClipboardCheck } from 'react-icons/bs'
import { WaterChart, HemoglobinChart, SugarChart, HeartbeatChart, MonthlyReports } from '../../../Exports';
import { RiStethoscopeFill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
const PatientMain = () => {
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
        <div className='space-y-5'>
            <h3 className='text-xl font-medium pb-5 pl-5 lg:pl-0'>DashBoard</h3>
            <div className='grid grid-col-2 xxl:grid-cols-4 gap-5'>
                <div className='space-y-5'>
                    <WaterChart />
                    <HemoglobinChart />
                </div>
                <div className='space-y-5'>
                    <HeartbeatChart />
                    <SugarChart />
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] h-[36rem] overflow-hidden shadow-gray-100 rounded-lg p-5'>
                    <div className='flex justify-between'>
                        <h3 className='text-lg font-medium'>Doctor's Appointment</h3>
                        <BiDotsHorizontalRounded />
                    </div>
                    <div className='h-full overflow-scroll hideScroll'>
                        {appointemnts?.map(spec => (
                            <div key={spec?._id} className='border border-gray-200 w-full rounded-md flex justify-between items-center p-3 my-4'>
                                <div className='flex gap-3 items-center'>
                                    {spec?.icon}
                                    <div>
                                        <p className='font-medium'>{spec?.dr}</p>
                                        <p className='text-gray-500 text-sm'>{spec?.specailzation}</p>
                                    </div>
                                </div>
                                <span>{spec?.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] h-[36rem] overflow-hidden shadow-gray-100 rounded-lg p-5'>
                    <div className='flex justify-between'>
                        <h3 className='text-lg font-medium'>Doctor's Appointment</h3>
                        <BiDotsHorizontalRounded />
                    </div>
                    <div className='h-full overflow-scroll hideScroll'>
                        {appointemnts?.map(spec => (
                            <div key={spec?._id} className='border border-gray-200 w-full rounded-md flex justify-between items-center p-3 my-4'>
                                <div className='flex gap-3 items-center'>
                                    {spec?.icon}
                                    <div>
                                        <p className='font-medium'>{spec?.dr}</p>
                                        <p className='text-gray-500 text-sm'>{spec?.specailzation}</p>
                                    </div>
                                </div>
                                <span>{spec?.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MonthlyReports />
        </div>
    )
}

export default PatientMain
