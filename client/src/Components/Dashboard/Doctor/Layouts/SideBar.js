import React from 'react'
import { BsChat, BsChatSquareText, BsChatText, BsGear, BsGrid, BsPeople, BsPersonLinesFill } from 'react-icons/bs'
import AnimSlideRight from '../../../../Animation/AnimSlideRight';
import { AiOutlineAlipay } from 'react-icons/ai'
import { IoCalendarNumberOutline, IoNewspaperOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import useBreakpoint from './../../../../Hooks/useBreakpoint';
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { FeatureAction } from './../../../../Redux/Slices/FeaturesSlice';
import { GiAlarmClock } from 'react-icons/gi';

const SideBar = () => {
    const Breakpoint = useBreakpoint();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const { DocSide } = useSelector(state => state.Features);
    const MobileView = (Breakpoint === 'xs') || (Breakpoint === 'sm') || (Breakpoint === 'md') || (Breakpoint === 'lg')
    const LinkList = ({ Icon, Title, Href, onClose }) => {
        return (
            <div onClick={() => { DocSide && dispatch(FeatureAction.setDocSide(false)) }} className={`text-lg font-medium px-5 w-full ${(pathname === Href) ? '!text-blue-600' : ' text-gray-600'}`}>
                <Link to={Href}>
                    <div className='flex gap-4 py-2 items-center hover:text-blue-600 group-hover:text-blue-600'>
                        <div className={` group ${(pathname === Href) ? 'text-blue-600' : 'text-gray-600'}`}>{Icon}</div>
                        <p className='text-lg'>{Title}</p>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <>
            {!MobileView &&
                <div className='shadow-[.2px_.2px_3px_1px] shadow-gray-100 hidden md:block px-0 overflow-hidden rounded-lg'>
                    <div className='relative'>
                        <img className='w-full relative' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/profile-bg.jpg' alt='' />
                        <img className='w-24 h-24 rounded-full absolute flex inset-x-0 !left-[40%] -bottom-10 shadow-lg'
                            src='https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg' alt='' />
                    </div>
                    <div className='text-center w-full mt-12 mb-3'>
                        <p className='font-medium text-lg'>Dr. Calvin Carlo</p>
                        <p className='text-gray-500'>Orthopedic</p>
                    </div>
                    <div>
                        <LinkList Icon={<BsGrid size={17} />} Title='Dashboard' Href='/doctor/doctor-dashboard' />
                        <LinkList Icon={<IoCalendarNumberOutline size={20} />} Title='Appointment ' Href='/doctor/doctor-appointment' />
                        <LinkList Icon={<GiAlarmClock size={20} />} Title='Schedule Timing' Href='/doctor/doctor-schedule' />
                        <LinkList Icon={<IoNewspaperOutline size={20} />} Title='Invoices' Href='/doctor/invoices' />
                        <LinkList Icon={<BsChatText size={20} />} Title='Messages' Href='/doctor/doctor-messages' />
                        <LinkList Icon={<BsPeople size={20} />} Title='Patient List' Href='/doctor/patient-list' />
                        <LinkList Icon={<BsChatSquareText size={20} />} Title='Patients Review' Href='/doctor/patient-review' />
                        <LinkList Icon={<BsChat size={20} />} Title='Chat' Href='/doctor/doctor-chat' />
                        <LinkList Icon={<AiOutlineAlipay size={20} />} Title='Payment Information' Href='/doctor/payment' />
                        <LinkList Icon={<BsGear size={20} />} Title='Profile' Href='/doctor/doctor-profile' />
                        <LinkList Icon={<BsPersonLinesFill size={20} />} Title='Profile Settings' Href='/doctor/settings' />
                    </div>
                </div>
            }
            <AnimatePresence>
                {DocSide &&
                    <>
                        <div
                            onClick={() => dispatch(FeatureAction.setDocSide(true))}
                            className='fixed inset-0 z-10 block lg:hidden bg-black/30'></div>
                        <motion.div
                            variants={AnimSlideRight}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='fixed top-0 left-0 w-80 z-20 bg-white h-screen overflow-hidden'>
                            <div className='relative'>
                                <img className='w-full relative' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/profile-bg.jpg' alt='' />
                                <img className='w-24 h-24 rounded-full absolute flex inset-x-0 !left-[40%] -bottom-10 shadow-lg'
                                    src='https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg' alt='' />
                            </div>
                            <div className='text-center w-full mt-12 mb-3'>
                                <p className='font-medium text-lg'>Dr. Calvin Carlo</p>
                                <p className='text-gray-500'>Orthopedic</p>
                            </div>
                            <div>
                                <LinkList Icon={<BsGrid size={17} />} Title='Dashboard' Href='/doctor/doctor-dashboard' />
                                <LinkList Icon={<IoCalendarNumberOutline size={20} />} Title='Appointment ' Href='/doctor/doctor-appointment' />
                                <LinkList Icon={<GiAlarmClock size={20} />} Title='Schedule Timing' Href='/doctor/doctor-schedule' />
                                <LinkList Icon={<IoNewspaperOutline size={20} />} Title='Invoices' Href='/doctor/invoices' />
                                <LinkList Icon={<BsChatText size={20} />} Title='Messages' Href='/doctor/doctor-messages' />
                                <LinkList Icon={<BsPeople size={20} />} Title='Patient List' Href='/doctor/patient-list' />
                                <LinkList Icon={<BsChatSquareText size={20} />} Title='Patients Review' Href='/doctor/patient-review' />
                                <LinkList Icon={<BsChat size={20} />} Title='Chat' Href='/doctor/doctor-chat' />
                                <LinkList Icon={<AiOutlineAlipay size={20} />} Title='Payment Information' Href='/doctor/payment' />
                                <LinkList Icon={<BsGear size={20} />} Title='Profile' Href='/doctor/doctor-profile' />
                                <LinkList Icon={<BsPersonLinesFill size={20} />} Title='Profile Settings' Href='/doctor/settings' />
                            </div>
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </>
    )
}

export default SideBar
