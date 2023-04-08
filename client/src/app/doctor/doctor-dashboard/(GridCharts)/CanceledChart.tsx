import AreaPlot from '@Components/Graphs/AreaPlot'
import React from 'react'

const CanceledChart = () => {
    const data = [
        { timePeriod: 'Q1', value: 50 },
        { timePeriod: 'Q2', value: 70 },
        { timePeriod: 'Q3', value: 90 },
        { timePeriod: 'Q4', value: 60 },
    ];

    return (
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-52 shadow-gray-100 rounded-lg overflow-hidden'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-2'>
                    <p className='font-medium'>Heartbeat</p>
                    <p className='text-orange-500 bg-orange-100 rounded-full border border-orange-200 text-sm px-3 font-medium'>80bpm</p>
                </div>
                <div className='text-blue-500 text-sm font-medium'>220+ Week</div>
            </div>
            <div className='w-full h-full'>
                <AreaPlot color='#F0735A' data={data} />
            </div>
        </div>
    )
}

export default CanceledChart
