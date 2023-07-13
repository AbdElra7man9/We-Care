'use client';
import React from 'react'
import AnimSlideRight from '@Animation/AnimSlideRight';
import useBreakpoint from '@Hooks/useBreakpoint';
import { AnimatePresence, motion } from 'framer-motion'
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@Hooks/useRedux';
import Image from 'next/image';
import { docsConfig } from '@config/docsConfig';
import { userInfo } from 'os';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';

const SideBar: React.FC = () => {
    const { breakpoint } = useBreakpoint();
    const MobileView = (breakpoint == 'sm') || (breakpoint == 'xs')
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const { DocSide } = useAppSelector(state => state.Features);
    const userInfo = useAppSelector(selectCurrentUser)
    const LinkList: React.FC = ({ }) => {
        return (
            <>
                {docsConfig.SideBar.Doc.map((item, index) => (

                    <div
                        key={index}
                        onClick={() => { DocSide && dispatch(FeatureAction.setDocSide()) }}
                        className={
                            `text-lg font-medium px-5 w-full ${(pathname === item.Href) ?
                                '!text-blue-600'
                                : ' text-gray-600'}`
                        }
                    >
                        <Link
                            href={item.Href}
                            aria-label='side bar link'
                            draggable={false}>
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
    const BackGroundImage = () => {
        return (
            <div className='relative'>
                <Image
                    className='w-full relative'
                    height={400}
                    width={400}
                    draggable={false}
                    priority
                    src='/Images/profile-bg.jpg'
                    alt=''
                />
                <Image
                    className='w-24 h-24 rounded-full absolute flex inset-x-0 !left-[40%] -bottom-10 shadow-lg'
                    height={200}
                    width={200}
                    priority
                    draggable={false}
                    src='/Images/Clients/09.jpg'
                    alt=''
                />
            </div>
        )
    }

    return (
        <>
            {!MobileView &&
                <div className='shadow-[.2px_.2px_3px_1px] sticky top-[80px] duration-300 shadow-gray-100 dark:shadow-slate-700 hidden md:block px-0 overflow-hidden rounded-lg'>
                    <BackGroundImage />
                    <div className='text-center w-full mt-12 mb-3'>
                        <p className='font-medium text-lg'>Dr. {userInfo.name}</p>
                        <p className='text-gray-500'>{userInfo.specialization}</p>
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
                            <BackGroundImage />
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
