'use client';
import React from 'react'
import { useTheme } from 'next-themes'
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

export default function Themetoggle() {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-blue-600 text-white rounded-full p-3">
                {theme === "light" ? (
                    <BsSunFill
                        fontSize={15}
                    />
                ) : (
                    <BsMoonFill
                        fontSize={15}
                    />
                )}
            </button>
        </div>
    )
}