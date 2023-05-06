import AreaPlot from '@Components/Graphs/AreaPlot'
import React from 'react'
const UrgentChart = () => {
    const data = [
        { timePeriod: 'Jan', value: 10 },
        { timePeriod: 'Feb', value: 20 },
        { timePeriod: 'Mar', value: 15 },
        { timePeriod: 'Apr', value: 25 },
        { timePeriod: 'May', value: 30 },
        { timePeriod: 'Jun', value: 22 },
    ];
    return (
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-52 shadow-gray-100 rounded-lg overflow-hidden'>
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
