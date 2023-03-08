import React from 'react'
import { useParams } from 'react-router-dom';
import { SidePatient, PatientMain, Header } from '../Components/Exports'
const PatientDash = () => {
    const { dash } = useParams();

    return (
        <>
            <Header />
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>
                <div className='mt-20 lg:col-span-2 xl:col-span-1'>
                    <SidePatient />
                </div>
                <div className='w-full lg:col-span-2 xl:col-span-3'>
                    <div className='pt-24'>
                        {(dash === 'dashboard') && <PatientMain />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientDash
