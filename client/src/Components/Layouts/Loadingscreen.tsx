'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'

interface loadingscreenProps {

}

const Loadingscreen: FC<loadingscreenProps> = ({ }) => {
    return (
        <div className='h-screen w-screen relative flex justify-center items-center dark:bg-slate-900'>
            <div className="flex gap-3 w-full h-full absolute inset-0">
                <Image
                    height={200}
                    width={200}
                    className="w-10 h-10 rounded-xl"
                    src="/Images/logo-icon.png"
                    alt="logo"
                />
                <p className='text-2xl font-bold dark:text-slate-100'>Doctris</p>
            </div>
        </div>)
}

export default Loadingscreen