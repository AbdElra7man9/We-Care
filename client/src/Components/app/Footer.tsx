'use client';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { BsFillTelephoneFill, BsTelephoneForward } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { SlSocialLinkedin, SlSocialFacebook, SlSocialGithub, SlSocialTwitter } from 'react-icons/sl';
import Image from 'next/image';
import Link from 'next/link';
interface Company {
    _id: string;
    title: string;
    LinkDir: string;
}

interface Department {
    _id: string;
    title: string;
    LinkDir: string;
}
export default function Footer() {
    const company: Company[] = [
        {
            _id: '1',
            title: 'About us',
            LinkDir: '/'
        }, {
            _id: '2',
            title: 'Sevices',
            LinkDir: '/'
        }, {
            _id: '3',
            title: 'Team',
            LinkDir: '/'
        }, {
            _id: '4',
            title: 'Project',
            LinkDir: '/'
        }, {
            _id: '5',
            title: 'Blog',
            LinkDir: '/'
        }, {
            _id: '6',
            title: 'Login',
            LinkDir: '/'
        },
    ]
    const Department: Department[] = [
        {
            _id: '1',
            title: 'Eye Care',
            LinkDir: '/'
        }, {
            _id: '2',
            title: 'Psychotherapy',
            LinkDir: '/'
        }, {
            _id: '3',
            title: 'Dental Care',
            LinkDir: '/'
        }, {
            _id: '4',
            title: 'Orthopedic',
            LinkDir: '/'
        }, {
            _id: '5',
            title: 'Cardiology',
            LinkDir: '/'
        }, {
            _id: '6',
            title: 'Gynecology',
            LinkDir: '/'
        }, {
            _id: '7',
            title: 'Neurology',
            LinkDir: '/'
        },
    ]
    const Icons = [
        <SlSocialFacebook key={0} size={23} />,
        <SlSocialLinkedin key={1} size={20} />,
        <SlSocialGithub key={2} size={20} />,
        <SlSocialTwitter key={3} size={20} />
    ]

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
                            <p className='text-2xl font-bold'>Doctris</p>
                        </div>
                        <p className='text-gray-400 w-full text-sm leading-loose py-5'>
                            Great doctor if you need your family member to get effective immediate assistance,
                            emergency treatment or a simple consultation.
                        </p>
                    </div>
                    <div className='text-gray-400'>
                        <h3 className='text-xl text-white space-y-3 font-semibold'>Company</h3>
                        <div className='space-y-3 py-3'>
                            {company.map(item => (
                                <Link key={item?._id} href={item.LinkDir} className='flex gap-2 items-center'>
                                    <BiChevronRight />
                                    <p>{item.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='text-gray-400'>
                        <h3 className='text-xl text-white font-semibold'>Department</h3>
                        <div className='space-y-3 py-3'>
                            {Department.map(item => (
                                <Link key={item._id} href={item.LinkDir} className='flex gap-2 items-center'>
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
                            {Icons?.map((icon, index) => (
                                <Link
                                    key={index}
                                    href='/'
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
                    <p>2023 © Doctris. Design with  by Shreethemes.</p>
                    <div className='flex gap-3'>
                        <Link href='/'>Terms</Link>
                        <Link href='/'>Privecy</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}