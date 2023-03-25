'use client';
import React from 'react'
import { useTheme } from 'next-themes'
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

export default function Themetoggle() {
    const { theme,setTheme } = useTheme()
    return (
        <div>
            {theme === 'dark' ?
                <button onClick={() => setTheme('light')} className="bg-blue-600 text-white rounded-full p-3">
                    <BsSunFill size={15} />
                </button>
                :
                <button onClick={() => setTheme('dark')} className="bg-blue-600 text-white rounded-full p-3">
                    <BsMoonFill size={15} />
                </button>
            }
        </div>
    )
}
