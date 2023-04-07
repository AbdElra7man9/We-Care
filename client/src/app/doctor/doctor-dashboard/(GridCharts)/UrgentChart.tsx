import AreaPlot from '@Components/Graphs/AreaPlot'
import React from 'react'
const UrgentChart = () => {
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
                    <p className='font-medium'>Urgent </p>
                    <p className='text-yellow-500 bg-yellow-100 rounded-full border border-yellow-200 text-sm px-3 font-medium'>80bpm</p>
                </div>
                <div className='text-blue-500 text-sm font-medium'>220+ Week</div>
            </div>
            <div className='w-full h-full'>
                <AreaPlot color='#F1B561' data={data} />
            </div>
        </div>
    )
}

export default UrgentChart
