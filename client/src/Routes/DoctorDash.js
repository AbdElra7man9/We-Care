import React from 'react'
import { CalenderScreen, HeaderDoc, OverFlow, SideBar } from '../Components/Exports'
import { useParams } from 'react-router-dom';

const DoctorDash = () => {
    const { dash } = useParams();
    return (
        <>
            <SideBar />
            <div className='lg:ml-96'>
                <div className='fixed top-0 inset-x-0 lg:ml-96'>
                    <HeaderDoc />
                </div>
                <div className='pt-28'>
                    {(dash === 'dashboard') && <OverFlow />}
                    {(dash === 'calender') && <CalenderScreen />}
                </div>
            </div>
        </>
    )
}

export default DoctorDash
