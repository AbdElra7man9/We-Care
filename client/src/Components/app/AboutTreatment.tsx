'use client';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';

const AboutTreatment: React.FC = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 container max-w-7xl py-96 lg:py-72 select-none'>
            <div className='flex justify-center'>
                <Image
                    height={350}
                    width={350}
                    draggable={false}
                    alt=''
                    className='h-auto w-auto'
                    src='/Images/about-2.png'
                />
            </div>
            <div className='h-full px-3 flex items-center'>
                <div className='space-y-5'>
                    <h3 className='text-2xl font-medium'>About Our Treatments</h3>
                    <p className='text-gray-400 leading-loose'>

                        {`Great doctor if you need your family member to get effective immediate assistance, examination,
                        emergency treatment or a simple consultation. Thank you.
                        The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.
                        Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.
                        It contains a series of real Latin words.`}

                    </p>

                    <button
                        aria-label='more'
                        className='bg-blue-500 text-white rounded-lg p-3 px-4 font-medium inline'>
                        <span className='flex gap-3 items-center'>
                            Read More
                            <BsArrowRight />
                        </span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default AboutTreatment
