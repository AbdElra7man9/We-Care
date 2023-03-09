import React from 'react'
import { CalenderScreen, OverFlow, SideBar, Messages, Payment, PatientList, Header ,Appointments} from '../Components/Exports'
import { useParams } from 'react-router-dom';

const DoctordrDash = () => {
    const { drDash } = useParams();
    return (
        <>
            <Header />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-1'>
                <div className='lg:mt-28 lg:col-span-2 xxl:col-span-1 px-3'>
                    <SideBar />
                </div>
                <div className='w-full lg:col-span-2 xxl:col-span-3'>
                    <div className='pt-24'>
                        {(drDash === 'doctor-dashboard') && <OverFlow />}
                        {(drDash === 'doctor-schedule') && <CalenderScreen />}
                        {(drDash === 'doctor-appointment') && <Appointments />}
                        {(drDash === 'patient-list') && <PatientList />}
                        {(drDash === 'doctor-chat') && <Messages />}
                        {(drDash === 'payment') && <Payment />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctordrDash
