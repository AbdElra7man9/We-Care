'use client';
import useBreakpoint from "@Hooks/useBreakpoint";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SideBar from "./SideBar";

export default function AdminWraper({
    children
}: {
    children: React.ReactNode;
}) {
    const { breakpoint } = useBreakpoint();
    // const [SearchQuery] = useSearchParams();
    // const chatId = SearchQuery.get('chatId')
    const location = usePathname();
    const isChat = location.includes('doctor-chat')
    const MobileView = (breakpoint === 'xs') || (breakpoint === 'sm')
    const [sideWidth, setIsSideWidth] = useState('300px');
    const [sideMargin, setIsSideMargin] = useState('300px');
    
    return (
        <>
            <SideBar sideWidth={sideWidth} />
            <div className='gap-1 duration-300' style={{ paddingLeft: `${sideMargin}` }}>
                <div className='pt-5'>
                   {children}
                </div>
            </div>
        </>
    )
}
