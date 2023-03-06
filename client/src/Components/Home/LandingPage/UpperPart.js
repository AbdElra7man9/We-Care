import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch, BsGear, BsList, BsFillHandbagFill, BsFillClockFill } from 'react-icons/bs';
import { useBreakpoint } from '../../Exports';
import { FaHeartbeat } from 'react-icons/fa';

const UpperPart = () => {
    const [isHeader, setIsHeader] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { MobileView } = useBreakpoint();
    useEffect(() => {
        if (window.scrollY !== 0) {
            setIsScrolled(true)
        }
    }, [])
    const ChartBox = () => {
        return (
            <div className='absolute -bottom-[20rem] md:-bottom-20 inset-x-0'>
                <div className='container max-w-2xl lg:max-w-4xl grid grid-cols-1 md:grid-cols-3 border bg-white rounded-xl overflow-hidden'>
                    <div className='w-full bg-[#F8F9FA] p-5'>
                        <div className='space-y-3'>
                            <FaHeartbeat size={25} style={{ color: 'blue' }} />
                            <h4 className='text-gray-600 text-lg font-medium'>Emergency Cases</h4>
                            <p className='text-gray-500 text-sm'>This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                        </div>
                    </div>
                    <div className='w-full bg-white p-5'>
                        <div className='space-y-3'>
                            <BsFillHandbagFill size={25} style={{ color: 'blue' }} />
                            <h4 className='text-gray-600 text-lg font-medium'>Doctors Timetable</h4>
                            <p className='text-gray-500 text-sm'>This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                        </div>
                    </div>
                    <div className='w-full bg-[#F8F9FA] p-5'>
                        <div className='space-y-3'>
                            <BsFillClockFill size={25} style={{ color: 'blue' }} />
                            <h4 className='text-gray-600 text-lg font-medium'>Opening Hours</h4>
                            <div className='flex justify-between'>
                                <div className='text-gray-500'>
                                    <span className='block'>Monday-Friday</span>
                                    <span className='block'>Saturday</span>
                                    <span className='block'>Sunday</span>
                                </div>
                                <div className='text-blue-500 whitespace-nowrap'>
                                    <span className='block'>8:00 - 20:00</span>
                                    <span className='block'>8.00 - 18.00</span>
                                    <span className='block'>8.00 - 14.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {isHeader && <div onClick={() => setIsHeader(false)} className='fixed inset-0 z-10'></div>}
            <header className={`fixed z-20 container max-w-full bg-white lg:bg-transparent top-0 inset-x-0 ${isScrolled && '!bg-white'}`}>
                <div className='container border-b lg:border-none max-w-[28rem] sm:max-w-[35rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem] flex justify-between items-center p-3 whitespace-nowrap'>
                    <div className='flex items-center gap-2 lg:text-white'>
                        <img className='w-10 h-10 rounded-xl'
                            src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                        <p className='text-2xl font-bold'>Doctris</p>
                    </div>
                    {!MobileView &&
                        <div className='list-none flex gap-5 text-lg text-gray-400 font-semibold uppercase'>
                            <Link to='/' className='hover:text-purple-600 hover:border-b-2 hover:border-purple-500 border-transparent border-b-2'>Home</Link>
                            <Link>Doctor</Link>
                            <Link>Patients</Link>
                            <Link>Pharmacy</Link>
                            <Link>Pages</Link>
                        </div>
                    }
                    <div className='flex gap-2 md:gap-4 items-center'>
                        <button className='bg-blue-600 text-white rounded-full p-3'><BsGear size={15} /></button>
                        <button className='bg-blue-600 text-white rounded-full p-3'><BsSearch size={15} /></button>
                        <img className='h-10 w-10 rounded-full' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg' alt='' />
                        <button className='lg:hidden' onClick={() => setIsHeader(!isHeader)}><BsList size={24} /></button>
                    </div>
                </div>
                {isHeader &&
                    <div className='space-y-5 px-8 py-3 text-base text-gray-600 font-semibold uppercase z-20'>
                        <Link to='/' className='block hover:text-purple-600 hover:border-b-2 hover:border-purple-500 border-transparent border-b-2'>Home</Link>
                        <Link className='block'>Doctor</Link>
                        <Link className='block'>Patients</Link>
                        <Link className='block'>Pharmacy</Link>
                        <Link className='block'>Pages</Link>
                    </div>
                }
            </header>
            <div className='h-[50rem] md:h-[60rem] duration-200 container max-w-full px-0 relative'>
                <img className='h-full w-full object-cover'
                    src='https://shreethemes.in/doctris/layouts/assets/images/bg/01.jpg' alt='' />
                <div className="absolute inset-0 w-full h-full bg-[rgba(60,72,88,.7)]"></div>
                <div className='container px-5 sm:max-w-[50rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem] duration-300 absolute inset-0 flex items-center text-white '>
                    <div className='space-y-5 font-bold'>
                        <h4 className='leading-normal text-4xl lg:text-5xl'>Meet the <br />Best doctor</h4>
                        <h5 className='leading-snug text-xl text-gray-400 font-normal'>Great doctor if you need your family member to get effective immediate assistance,
                            <br /> emergency treatment or a simple consultation.</h5>
                        <button className='bg-blue-500 rounded-lg p-3 px-4 font-medium'>Take Appointment</button>
                        <h5 className='leading-snug text-xl text-gray-400 font-normal'>T&C apply. Please read Terms and Conditions </h5>
                    </div>
                </div>
                <ChartBox />
            </div>
        </>
    )
}

export default UpperPart
