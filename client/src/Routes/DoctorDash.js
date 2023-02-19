import React from 'react'
import { CalenderScreen, HeaderDoc, OverFlow, SideBar, Messages, Payment, PatientList } from '../Components/Exports'
import { useParams } from 'react-router-dom';

const DoctorDash = () => {
    const { dash } = useParams();
    return (
        <>
            <SideBar />
            <div className='lg:ml-[20rem]'>
                <div className='fixed top-0 inset-x-0 lg:ml-96'>
                    <HeaderDoc />
                </div>
                <div className='pt-24'>
                    {(dash === 'dashboard') && <OverFlow />}
                    {(dash === 'calender') && <CalenderScreen />}
                    {(dash === 'patientlist') && <PatientList />}
                    {(dash === 'messages') && <Messages />}
                    {(dash === 'payment') && <Payment />}
                </div>
            </div>
        </>
    )
}

export default DoctorDash
