import React, { useEffect, useState } from 'react'
import { useBreakpoint } from '../../Exports';
import { BsSearch, BsGear, BsList, BsJustifyLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FeatureAction } from './../../../Redux/Slices/FeaturesSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const [isHeader, setIsHeader] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { MobileView } = useBreakpoint();
    const dispatch = useDispatch();
    const { dash, drDash } = useParams();
    const location = useLocation();
    const isHome = (location.pathname === '/')
    useEffect(() => {
        if (window.scrollY !== 0) {
            setIsScrolled(true)
        }
    }, [])
    return (
        <>
            {isHeader && <div onClick={() => setIsHeader(false)} className='fixed inset-0 z-10'></div>}
            <header className={`fixed z-10 container max-w-full bg-white lg:bg-transparent top-0 inset-x-0 ${(isScrolled || !isHome) && '!bg-white lg:!border-b'}`}>
                <div className={`container border-b lg:border-none flex justify-between items-center p-3 whitespace-nowrap 
                ${(dash || drDash) ? 'max-w-full' : ' max-w-[28rem] sm:max-w-[35rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem]'}`}>
                    <div className='flex items-center gap-10'>
                        <div className='flex gap-3'>
                            {drDash && <button
                                onClick={() => dispatch(FeatureAction.setDocSide(true))}
                                className='text-gray-500 lg:hidden text-lg lg:text-3xl'><BsJustifyLeft />
                            </button>}
                            <Link to='/' className='flex gap-3'>
                                <img className='w-10 h-10 rounded-xl'
                                    src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                                <p className={`text-2xl font-bold ${(dash || drDash) && 'text-black'}`}>Doctris</p>
                            </Link>
                        </div>
                        {!MobileView &&
                            <div className='list-none flex gap-5 text-lg text-gray-800 font-semibold uppercase'>
                                <Link to='/' className='hover:text-blue-600'>Home</Link>
                                <Link to='/doctor/doctor-dashboard'>Doctor</Link>
                                <Link to='/patient/dashboard'>Patients</Link>
                                <Link>Pharmacy</Link>
                                <Link>Pages</Link>
                            </div>
                        }
                    </div>
                    <div className='flex gap-2 md:gap-4 items-center'>
                        <button className='bg-blue-600 text-white rounded-full p-3'><BsGear size={15} /></button>
                        <button className='bg-blue-600 text-white rounded-full p-3'><BsSearch size={15} /></button>
                        <Link to='/profile?user=profile'>
                            <img className='h-10 w-10 rounded-full shadow-blue-600 shadow-md drop-shadow-xl' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg' alt='' />
                        </Link>
                        <button className='lg:hidden' onClick={() => setIsHeader(!isHeader)}><BsList size={24} /></button>
                    </div>
                </div>
                {isHeader &&
                    <div className='space-y-5 px-8 py-3 text-base text-gray-600 font-semibold uppercase z-20'>
                        <Link to='/' className='block hover:text-blue-600'>Home</Link>
                        <Link to='/doctor/doctor-dashboard' className='block'>Doctor</Link>
                        <Link to='/patient/dashboard' className='block'>Patients</Link>
                        <Link className='block'>Pharmacy</Link>
                        <Link className='block'>Pages</Link>
                    </div>
                }
            </header>
        </>
    )
}

export default Header
