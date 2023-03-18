import React, { useState } from 'react'
import { MainOverflow, AdminSidebar, Header } from '../Components/Exports'
import { useParams, useLocation } from 'react-router-dom';
import useBreakpoint from './../Hooks/useBreakpoint';

const AdminDash = () => {
    const { admindash } = useParams();
    const { breakpoint } = useBreakpoint();
    // const [SearchQuery] = useSearchParams();
    // const chatId = SearchQuery.get('chatId')
    const location = useLocation();
    const isChat = location.pathname.includes('doctor-chat')
    const MobileView = (breakpoint === 'xs') || (breakpoint === 'sm')
    const [sideWidth, setIsSideWidth] = useState('300px');
    const [sideMargin, setIsSideMargin] = useState('300px');
    return (
        <>
            {!MobileView ?
                <Header setIsSideMargin={setIsSideMargin} setIsSideWidth={setIsSideWidth} sideMargin={sideMargin} />
                :
                !isChat &&
                <Header />
            }
            <AdminSidebar sideWidth={sideWidth} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-1 duration-300' style={{paddingLeft:`${sideMargin}`}}>
                <div className='w-full md:col-span-2 xxl:col-span-3'>
                    <div className='xl:pt-5'>
                        {(admindash === 'admin-dashboard') && <MainOverflow />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDash
