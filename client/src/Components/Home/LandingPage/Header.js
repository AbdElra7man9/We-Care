import React, { useEffect, useState } from 'react'
import { useBreakpoint } from '../../Exports';
import { BsSearch, BsGear, BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isHeader, setIsHeader] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { MobileView } = useBreakpoint();
    useEffect(() => {
        if (window.scrollY !== 0) {
            setIsScrolled(true)
        }
    }, [])
    return (
        <>
            {isHeader && <div onClick={() => setIsHeader(false)} className='fixed inset-0 z-10'></div>}
            <header className={`fixed z-20 container max-w-full bg-white lg:bg-transparent top-0 inset-x-0 ${isScrolled && '!bg-white'}`}>
                <div className='container border-b lg:border-none max-w-[28rem] sm:max-w-[35rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem] flex justify-between items-center p-3 whitespace-nowrap'>
                    <Link to='/' className='flex items-center gap-2 lg:text-white'>
                        <img className='w-10 h-10 rounded-xl'
                            src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                        <p className='text-2xl font-bold'>Doctris</p>
                    </Link>
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
        </>
    )
}

export default Header
