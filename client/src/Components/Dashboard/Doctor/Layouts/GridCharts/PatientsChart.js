import React from 'react'
import {AreaPlot} from '../../../../Exports'

const PatientsChart = () => {
    const data = [
        {
            "timePeriod": "2006 Q3",
            "value": 1
        },
        {
            "timePeriod": "2006 Q4",
            "value": 3.08
        },
        {
            "timePeriod": "2007 Q1",
            "value": 2.17
        },
        {
            "timePeriod": "2007 Q2",
            "value": 1.26
        },
    ]
    return (
        <div className='shadow-[.2px_.2px_3px_1px] h-52 shadow-gray-100 rounded-lg overflow-hidden'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-2'>
                    <p className='font-medium'>Patients</p>
                    <p className='text-sky-500 bg-sky-100 rounded-full border border-sky-200 text-sm px-3 font-medium'>93%</p>
                </div>
                <div className='text-blue-500 text-sm font-medium'>220+ Week</div>
            </div>
            <div className='w-full h-full'>
                <AreaPlot data={data} Color='green' />
            </div>
        </div>
    )
}

export default PatientsChart
