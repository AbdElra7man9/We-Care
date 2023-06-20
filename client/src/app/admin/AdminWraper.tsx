'use client';
import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

export default function AdminWraper({
    children
}: {
    children: React.ReactNode;
}) {

    const [sideWidth, setIsSideWidth] = useState<string>('300px');
    const [sideMargin, setIsSideMargin] = useState<string>('300px');

    return (
        <>
            <Header setIsSideMargin={setIsSideMargin} setIsSideWidth={setIsSideWidth} sideMargin={sideMargin} />
            <SideBar sideWidth={sideWidth} />
            <div className='gap-1 duration-300' style={{ paddingLeft: `${sideMargin}` }}>
                <div className='pt-5 conatiner max-w-full p-5 px-7'>
                    {children}
                </div>
            </div>
        </>
    )
}
