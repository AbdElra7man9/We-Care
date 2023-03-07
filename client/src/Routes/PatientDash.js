import React from 'react'
import { useParams } from 'react-router-dom';
import { SidePatient, PatientMain, Header } from '../Components/Exports'
const PatientDash = () => {
    const { dash } = useParams();

    return (
        <>
            <Header />
            <div className='flex gap-2'>
                <div className='mt-28'>
                    <SidePatient />
                </div>
                <div className='w-full'>
                    <div className='pt-24'>
                        {(dash === 'dashboard') && <PatientMain />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientDash
