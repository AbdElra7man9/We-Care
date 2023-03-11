import React from 'react'
import { CalenderScreen, OverFlow, SideBar, MainChat, Payment, PatientList, Header, Appointments } from '../Components/Exports'
import { useParams, useLocation } from 'react-router-dom';
import useBreakpoint from './../Hooks/useBreakpoint';

const DoctordrDash = () => {
    const { drDash } = useParams();
    const { breakpoint } = useBreakpoint();
    // const [SearchQuery] = useSearchParams();
    // const chatId = SearchQuery.get('chatId')
    const location = useLocation();
    const isChat = location.pathname.includes('doctor-chat')
    const MobileView = (breakpoint === 'xs') || (breakpoint === 'sm')

    return (
        <>
            {!MobileView ?
                <Header />
                :
                !isChat &&
                <Header />
            }
            <div className='grid grid-cols-1 md:grid-cols-4 gap-1'>
                <div className='md:mt-10 md:col-span-2 xxl:col-span-1 px-3'>
                    <SideBar />
                </div>
                <div className='w-full md:col-span-2 xxl:col-span-3'>
                    <div className='xl:pt-5'>
                        {(drDash === 'doctor-dashboard') && <OverFlow />}
                        {(drDash === 'doctor-schedule') && <CalenderScreen />}
                        {(drDash === 'doctor-appointment') && <Appointments />}
                        {(drDash === 'patient-list') && <PatientList />}
                        {(drDash === 'doctor-chat') && <MainChat />}
                        {(drDash === 'payment') && <Payment />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctordrDash
