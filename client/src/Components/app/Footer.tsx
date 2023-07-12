import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { BsFillTelephoneFill, BsTelephoneForward } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import { docsConfig } from '@config/docsConfig';

export default function Footer() {


    return (
        <footer className='bg-[#202942] duration-200 conatiner max-w-full mt-16'>
            <div className='container px-5 max-w-7xl py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <div className='flex items-center gap-2 text-white'>
                            <Image
                                height={100}
                                width={100}
                                className='w-10 h-10 rounded-xl'
                                src="/Images/logo-icon.png"
                                alt='' />
                            <p className='text-2xl font-bold'>We Care</p>
                        </div>
                        <p className='text-gray-400 w-full text-sm leading-loose py-5'>
                            Great doctor if you need your family member to get effective immediate assistance,
                            emergency treatment or a simple consultation.
                        </p>
                    </div>
                    <div className='text-gray-400'>
                        <h3 className='text-xl text-white space-y-3 font-semibold'>Company</h3>
                        <div className='space-y-3 py-3'>
                            {docsConfig.Footer.Company.map(item => (
                                <Link key={item?._id} href={item.LinkDir} aria-label='item' className='flex gap-2 items-center'>
                                    <BiChevronRight />
                                    <p>{item.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='text-gray-400'>
                        <h3 className='text-xl text-white font-semibold'>Department</h3>
                        <div className='space-y-3 py-3'>
                            {docsConfig.Footer.Department.map(item => (
                                <Link key={item._id} href={item.LinkDir} aria-label='item' className='flex gap-2 items-center'>
                                    <BiChevronRight />
                                    <p>{item.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='text-gray-400'>
                        <h3 className='text-xl font-semibold text-white py-5'>Contact us</h3>
                        <div className='space-y-3 text-gray-400'>
                            <div className='flex items-center gap-3'>
                                <span > <BsTelephoneForward size={20} /></span>
                                <p >contact@example.com</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span > <BsFillTelephoneFill size={20} /></span>
                                <p >+152 534-468-854</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span > <CiLocationOn size={20} /></span>
                                <p >View on Google map</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 py-5'>
                            {docsConfig.SocialIcons?.map((icon, index) => (
                                <Link
                                    key={index}
                                    href='/'
                                    aria-label='home'
                                    className='w-10 h-10 rounded-full border border-gray-400 shadow-gray-600 
                                    drop-shadow-xl text-gray-500 hover:bg-gray-500 hover:text-white duration-150 
                                    flex justify-center items-center shadow-2xl'
                                >
                                    {icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div><hr className='text-gray-400' />
                <div className='flex justify-between items-center text-gray-400 pt-8'>
                    <p>2023 © We Care. Design with  by Shreethemes.</p>
                    <div className='flex gap-3'>
                        <Link href='/' aria-label='terms'>Terms</Link>
                        <Link href='/' aria-label='privacy'>Privecy</Link>
                        <Link href='/' aria-label='about'>About</Link>
                        <Link href='/' aria-label='contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}