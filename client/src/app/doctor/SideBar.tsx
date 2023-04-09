'use client';
import React from 'react'
import { BsChat, BsChatSquareText, BsChatText, BsGear, BsGrid, BsPeople, BsPersonLinesFill } from 'react-icons/bs'
import AnimSlideRight from '@Animation/AnimSlideRight';
import { AiOutlineAlipay } from 'react-icons/ai'
import { IoCalendarNumberOutline, IoNewspaperOutline } from 'react-icons/io5'
import useBreakpoint from '@Hooks/useBreakpoint';
import { AnimatePresence, motion } from 'framer-motion'
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import { GiAlarmClock } from 'react-icons/gi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@Hooks/useRedux';
import Image from 'next/image';

interface LinkListProps {
    Icon: React.ReactNode;
    Title: string;
    Href: string;
    // onClose?: () => void;
}
const linkListItems: LinkListProps[] = [
    {
        Icon: <BsGrid size={17} />,
        Title: 'Dashboard',
        Href: '/doctor/doctor-dashboard'
    },
    {
        Icon: <IoCalendarNumberOutline size={20} />,
        Title: 'Appointment',
        Href: '/doctor/doctor-appointment'
    },
    {
        Icon: <GiAlarmClock size={20} />,
        Title: 'Schedule Timing',
        Href: '/doctor/doctor-schedule'
    },
    {
        Icon: <IoNewspaperOutline size={20} />,
        Title: 'Invoices',
        Href: '/doctor/invoices'
    },
    {
        Icon: <BsChatText size={20} />,
        Title: 'Messages',
        Href: '/doctor/doctor-messages'
    },
    {
        Icon: <BsPeople size={20} />,
        Title: 'Patient List',
        Href: '/doctor/patient-list'
    },
    {
        Icon: <BsChatSquareText size={20} />,
        Title: 'Patients Review',
        Href: '/doctor/patient-review'
    },
    {
        Icon: <BsChat size={20} />,
        Title: 'Chat',
        Href: '/doctor/doctor-chat'
    },
    {
        Icon: <AiOutlineAlipay size={20} />,
        Title: 'Payment Information',
        Href: '/doctor/payment'
    },
    {
        Icon: <BsGear size={20} />,
        Title: 'Profile',
        Href: '/doctor/doctor-profile'
    },
    {
        Icon: <BsPersonLinesFill size={20} />,
        Title: 'Profile Settings',
        Href: '/doctor/settings'
    }
];

const SideBar: React.FC = () => {
    const { MobileView } = useBreakpoint();
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const { DocSide } = useAppSelector(state => state.Features);

    const LinkList: React.FC = ({ }) => {
        return (
            <>
                {linkListItems.map((item, index) => (

                    <div
                        key={index}
                        onClick={() => { DocSide && dispatch(FeatureAction.setDocSide()) }}
                        className={
                            `text-lg font-medium px-5 w-full ${(pathname === item.Href) ?
                                '!text-blue-600'
                                : ' text-gray-600'}`
                        }
                    >
                        <Link href={item.Href} draggable={false}>
                            <div className={`flex gap-4 py-2 items-center hover:text-blue-600 group-hover:text-blue-600 
                        dark:hover:text-blue-600 dark:group-hover:text-blue-600 
                            ${(pathname === item.Href) ? ' text-blue-600' : 'text-gray-600 dark:text-slate-400'}`}>
                                {item.Icon}
                                <p className='text-lg'>{item.Title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </>

        )
    }

    return (
        <>
            {!MobileView &&
                <div className='shadow-[.2px_.2px_3px_1px] shadow-gray-100 dark:shadow-slate-700 hidden md:block px-0 overflow-hidden rounded-lg'>
                    <div className='relative'>
                        <Image
                            className='w-full relative'
                            height={400}
                            width={400}
                            draggable={false}
                            src='/Images/profile-bg.jpg'
                            alt=''
                        />
                        <Image
                            className='w-24 h-24 rounded-full absolute flex inset-x-0 !left-[40%] -bottom-10 shadow-lg'
                            height={200}
                            width={200}
                            draggable={false}
                            src='/Images/Clients/09.jpg'
                            alt=''
                        />
                    </div>
                    <div className='text-center w-full mt-12 mb-3'>
                        <p className='font-medium text-lg'>Dr. Calvin Carlo</p>
                        <p className='text-gray-500'>Orthopedic</p>
                    </div>
                    <LinkList />
                </div>
            }
            <AnimatePresence>
                {DocSide &&
                    <>
                        <div
                            onClick={() => dispatch(FeatureAction.setDocSide())}
                            className='fixed inset-0 z-10 block lg:hidden bg-black/30'></div>
                        <motion.div
                            variants={AnimSlideRight}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='fixed top-0 left-0 w-80 z-20 bg-white h-screen overflow-hidden'>
                            <div className='relative'>
                                <Image
                                    className='w-full relative'
                                    height={400}
                                    width={400}
                                    draggable={false}
                                    src='/Images/profile-bg.jpg'
                                    alt=''
                                />
                                <Image
                                    className='w-24 h-24 rounded-full absolute flex inset-x-0 !left-[40%] -bottom-10 shadow-lg'
                                    height={200}
                                    width={200}
                                    draggable={false}
                                    src='/Images/Clients/09.jpg'
                                    alt=''
                                />
                            </div>
                            <div className='text-center w-full mt-12 mb-3'>
                                <p className='font-medium text-lg'>Dr. Calvin Carlo</p>
                                <p className='text-gray-500'>Orthopedic</p>
                            </div>
                            <LinkList />
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </>
    )
}

export default SideBar
