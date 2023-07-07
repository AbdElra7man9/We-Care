'use client';
import React from 'react'
import { MdWaterDrop } from 'react-icons/md'
import AreaPlot from '@Components/Graphs/AreaPlot'

const HemoglobinChart: React.FC = () => {
    const data = [
        { timePeriod: 'Jan', value: 10 },
        { timePeriod: 'Feb', value: 20 },
        { timePeriod: 'Mar', value: 15 },
        { timePeriod: 'Apr', value: 25 },
    ];

    return (
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-52 shadow-gray-100 rounded-lg overflow-hidden'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-2'>
                    <p className='font-medium'>Water</p>
                    <p className='text-sky-500 bg-sky-100 rounded-full border border-sky-200 text-sm px-3 font-medium'>93%</p>
                </div>
                <div className='text-blue-500'>
                    <MdWaterDrop size={20} />
                </div>
            </div>
            <div className='w-full h-full'>
                <AreaPlot data={data} color='green' />
            </div>
        </div>
    )
}

export default HemoglobinChart
