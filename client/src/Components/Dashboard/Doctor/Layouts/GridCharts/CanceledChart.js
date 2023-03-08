import React from 'react'
import {AreaPlot} from '../../../../Exports'

const CanceledChart = () => {
    const data = [
        {
            "timePeriod": "2006 Q1",
            "value": 1.5
        },
        {
            "timePeriod": "2006 Q2",
            "value": 2.05
        },
        {
            "timePeriod": "2006 Q3",
            "value": 3.08
        },
        {
            "timePeriod": "2006 Q4",
            "value": 2.08
        },
        {
            "timePeriod": "2006 Q5",
            "value": 3.08
        },
        {
            "timePeriod": "2006 Q9",
            "value": 2.17
        },
        {
            "timePeriod": "2006 Q10",
            "value": 3.26
        },
    ]
    return (
        <div className='shadow-[.2px_.2px_3px_1px] h-52 shadow-gray-100 rounded-lg overflow-hidden'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-2'>
                    <p className='font-medium'>Heartbeat</p>
                    <p className='text-orange-500 bg-orange-100 rounded-full border border-orange-200 text-sm px-3 font-medium'>80bpm</p>
                </div>
                <div className='text-blue-500 text-sm font-medium'>220+ Week</div>
            </div>
            <div className='w-full h-full'>
                <AreaPlot Color='#F0735A' data={data} />
            </div>
        </div>
    )
}

export default CanceledChart
