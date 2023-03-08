import React from 'react'
import { WaterChart, HemoglobinChart, SugarChart, HeartbeatChart, MonthlyReports, AppointmentsList } from '../../../Exports';
const PatientMain = () => {

    return (
        <div className='space-y-5'>
            <h3 className='text-xl font-medium pb-5 pl-5 lg:pl-0'>DashBoard</h3>
            <div className='grid grid-col-2 xxl:grid-cols-4 gap-5'>
                <div className='space-y-5'>
                    <WaterChart />
                    <HemoglobinChart />
                </div>
                <div className='space-y-5'>
                    <HeartbeatChart />
                    <SugarChart />
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] h-[36rem] overflow-hidden shadow-gray-100 rounded-lg p-5'>
                    <AppointmentsList />
                </div>
                <div className='shadow-[.2px_.2px_3px_1px] h-[36rem] overflow-hidden shadow-gray-100 rounded-lg p-5'>
                    <AppointmentsList />
                </div>
            </div>
            <MonthlyReports />
        </div>
    )
}

export default PatientMain
