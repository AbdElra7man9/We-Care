import React from 'react'
import { BsArrowUpShort, BsChatText, BsGear, BsGrid, BsJustifyLeft, BsPeople } from 'react-icons/bs'
import AnimSlideRight from '../../../../Animation/AnimSlideRight';
import { AiOutlineAlipay } from 'react-icons/ai'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import useBreakpoint from './../../../../Hooks/useBreakpoint';
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { FeatureAction } from './../../../../Redux/Slices/FeaturesSlice';

const SideBar = () => {
    const Breakpoint = useBreakpoint();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const { DocSide } = useSelector(state => state.Features);
    const MobileView = (Breakpoint === 'xs') || (Breakpoint === 'sm') || (Breakpoint === 'md') || (Breakpoint === 'lg')
    const LinkList = ({ Icon, Title, Href, onClose }) => {
        return (
            <div onClick={() => dispatch(FeatureAction.setDocSide(false))} className={`hover:bg-gray-100 font-light text-xl px-7 w-full ${(pathname === Href) && '!bg-blue-600 !text-white '}`}>
                <Link to={Href}>
                    <div className='flex gap-4 py-4 items-center'>
                        <div className={(pathname === Href) ? 'text-white' : 'text-gray-600'}>{Icon}</div>
                        <p className='text-xl font-light'>{Title}</p>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <AnimatePresence>
            {(!MobileView || DocSide) &&
                <>
                    <div
                        onClick={() => dispatch(FeatureAction.setDocSide(true))}
                        className='fixed inset-0 z-10 block lg:hidden bg-black/30'></div>
                    <motion.div
                        variants={(MobileView && DocSide) && AnimSlideRight}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className='w-80 fixed bg-white border-r h-screen z-20 lg:z-10'>
                        <div className='flex justify-between items-center p-5'>
                            <div className='flex items-center gap-2'>
                                <img className='w-10 h-12 rounded-xl'
                                    src='https://res.cloudinary.com/abdo9/image/upload/v1676727644/b425ac90714005.5e1ee66a1d36b_2_chd7s0.png' alt='' />
                                <div>
                                    <p className='text-2xl font-bold'>Zendenta</p>
                                    <p className='text-sm font-light'>Doctor page mangement</p>
                                </div>
                            </div>
                            <button
                                onClick={() => dispatch(FeatureAction.setDocSide(true))}
                                className='text-gray-500'><BsJustifyLeft size={25} />
                            </button>
                        </div>
                        <div>
                            <LinkList Icon={<BsGrid size={20} />} Title='OverFlow' Href='/doctor/dashboard' />
                            <LinkList Icon={<IoCalendarNumberOutline size={20} />} Title='Calender' Href='/doctor/calender' />
                            <LinkList Icon={<BsPeople size={20} />} Title='Patient List' Href='/doctor/patientlist' />
                            <LinkList Icon={<BsChatText size={20} />} Title='Messages' Href='/doctor/messages' />
                            <LinkList Icon={<AiOutlineAlipay size={20} />} Title='Payment Information' Href='/doctor/payment' />
                            <LinkList Icon={<BsGear size={20} />} Title='Settings' Href='/doctor/settings' />
                        </div>
                        <div className='absolute bottom-3 w-full p-5 border-t'>
                            <Link className='flex justify-between'>
                                <div className='w-full flex gap-3'>
                                    <img className='w-12 h-12 rounded-full'
                                        src='https://res.cloudinary.com/abdo9/image/upload/v1676052171/profile_bikmhe.jpg' alt='' />
                                    <div>
                                        <p className='text-lg font-bold'>Dr.Adam</p>
                                        <p className='text-sm font-light'>Dentist</p>
                                    </div>
                                </div>
                                <button className='text-gray-500'><BsArrowUpShort size={25} /></button>
                            </Link>
                        </div>
                    </motion.div>
                </>
            }
        </AnimatePresence>
    )
}

export default SideBar
