'use client';
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsMoonFill, BsSun, BsSunFill } from 'react-icons/bs';

export default function Themetoggle() {
    const { theme, setTheme } = useTheme();
    const [isLight, setIsLight] = useState<Boolean>(false);
    useEffect(() => {
        if (theme === 'light') {
            return setIsLight(true);
        }
        return setIsLight(false)
    }, [theme])
    return (
        <div>
            <button
                aria-label='change mode'
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-blue-600 text-white rounded-full text-xs sm:text-lg p-2 sm:p-3">
                {isLight ? (
                    <BsMoonFill />
                ) : (
                    <BsSun />
                )}
            </button>
        </div>
    )
}