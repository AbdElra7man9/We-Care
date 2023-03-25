'use client';
import React from 'react'
import { BsHeart, BsStarFill } from 'react-icons/bs'
import { CiLocationOn, CiTimer } from 'react-icons/ci'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { SlSocialFacebook, SlSocialGithub, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl'
import Link from 'next/link';
import Image from 'next/image';

interface DoctorsProps {
    _id: string;
    ImgSrc: string;
    Name: string;
    Spec: string;
}

const TopDoctors = () => {
    const TopDoctors: DoctorsProps[] = [
        {
            _id: '1',
            ImgSrc: '/Images/Doctors/01.jpg',
            Name: 'Calvin Carlo',
            Spec: 'Eye Care'
        },
        {
            _id: '2',
            ImgSrc: '/Images/Doctors/02.jpg',
            Name: 'Cristino Murphy',
            Spec: 'M.B.B.S, Gynecologist'
        }, {
            _id: '3',
            ImgSrc: '/Images/Doctors/03.jpg',
            Name: 'Alia Reddy',
            Spec: 'M.B.B.S, Psychotherapist'
        }, {
            _id: '4',
            ImgSrc: '/Images/Doctors/04.jpg',
            Name: 'Toni Kovar',
            Spec: 'M.B.B.S, Orthopedic'
        }, {
            _id: '8',
            ImgSrc: '/Images/Doctors/05.jpg',
            Name: 'Jessica McFarlane',
            Spec: 'M.B.B.S, Dentist'
        }, {
            _id: '5',
            ImgSrc: '/Images/Doctors/06.jpg',
            Name: 'Elsie Sherman',
            Spec: 'M.B.B.S, Gastrologist'
        }, {
            _id: '6',
            ImgSrc: '/Images/Doctors/07.jpg',
            Name: 'Bertha Magers',
            Spec: 'M.B.B.S, Urologist'
        }, {
            _id: '7',
            ImgSrc: '/Images/Doctors/08.jpg',
            Name: 'Louis Batey',
            Spec: 'M.B.B.S, Neurologist'
        },
    ]
    const Icons = [
        <SlSocialFacebook size={23} />,
        <SlSocialLinkedin size={23} />,
        <SlSocialGithub size={23} />,
        <SlSocialTwitter size={23} />
    ]
    
    const SingDoc: React.FC<{ doc: DoctorsProps }> = ({ doc }) => {

        return (
            <div className='border dark:border-slate-700 overflow-hidden rounded-lg w-full select-none'>
                <div className='w-full h-[20rem] overflow-hidden relative'>
                    <Image
                        height={200}
                        width={200}
                        src={doc?.ImgSrc}
                        className='w-full object-cover h-full hover:scale-[1.2] duration-200'
                        alt=''
                    />
                    <button
                        className='w-10 h-10 absolute top-0 m-3 right-0 rounded-full bg-red-100 shadow-red-600 drop-shadow-xl text-red-500
                      hover:bg-red-500 hover:text-white duration-150 flex justify-center items-center shadow-2xl'
                    >
                        <BsHeart size={15} />
                    </button>
                </div>
                <div className='space-y-3 p-5 overflow-hidden'>
                    <div>
                        <p className='text-lg font-medium text-gray-800 dark:text-white'>{doc?.Name}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{doc?.Spec}</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1 text-orange-500'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <p className='text-gray-500'>5 Stare</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-3'>

                            <span className='text-blue-500'> <CiLocationOn size={20} /></span>
                            <p className='text-gray-500'>63, PG Shustoke, UK</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='text-blue-500'> <CiTimer size={20} /></span>
                            <p className='text-gray-500'>Mon: 2:00PM - 6:00PM</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='text-blue-500'> <HiOutlineCurrencyDollar size={20} /></span>
                            <p className='text-gray-500'>$ 75 USD / Visit</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        {Icons?.map((icon, index) => (
                            <Link
                                href='/'
                                key={index}
                                className='w-10 h-10 rounded-full bg-blue-100 shadow-blue-600 shadow-md drop-shadow-xl dark:bg-slate-800 dark:hover:bg-blue-800
                            text-blue-500 hover:bg-blue-500 hover:text-white duration-150 flex justify-center items-center'
                            >
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='container px-5 max-w-7xl py-16'>
            <div className='text-center space-y-3'>
                <h3 className='text-2xl font-medium'>Find Your Specialists</h3>
                <p className='text-gray-400 leading-loose'>
                    Great doctor if you need your family member to get
                    effective immediate assistance, emergency
                    <br />
                    treatment or a simple consultation.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5'>
                {TopDoctors?.map((doc) => (
                    <div key={doc?._id}>
                        <SingDoc doc={doc} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopDoctors
