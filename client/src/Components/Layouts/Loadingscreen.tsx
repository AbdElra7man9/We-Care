'use client';
import Image from 'next/image';
import { FC } from 'react'
import { ImSpinner7 } from 'react-icons/im';
import logo from '/public/Images/logo-icon.png'
interface loadingscreenProps {

}

const Loadingscreen: FC<loadingscreenProps> = ({ }) => {
    return (
        <div className="h-screen flex justify-center items-center text-7xl">
            <div>
                <div className="flex gap-3 w-full h-full">
                    <Image
                        height={200}
                        width={200}
                        className="w-10 h-10 rounded-xl"
                        src={logo}
                        alt="We Care"
                    />
                    <p className='text-2xl font-bold dark:text-slate-100'>We Care</p>
                </div>
                <div className="text-blue-600 text-5xl py-8 animate-spin flex items-center justify-center"><ImSpinner7 /></div>
            </div>
        </div>
    )
}

export default Loadingscreen