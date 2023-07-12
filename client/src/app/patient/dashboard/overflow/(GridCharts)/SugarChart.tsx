'use client';
import React from 'react'
import { MdWaterDrop } from 'react-icons/md'
import DonutChart from '@Components/Graphs/DonutPlot';

const SugarChart = () => {
    const chartData = {
        data: 90,
        filledColor: '#ffc300',
    };


    return (
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-96 shadow-gray-100 rounded-lg p-5'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <p className='font-medium'>Sugar levels</p>
                    <p className='text-orange-500 bg-orange-100 rounded-full border border-orange-200 text-sm px-3 font-medium'>90 mg/dL</p>
                </div>
                <div className='text-orange-500'><MdWaterDrop size={20} /></div>
            </div>
            <div className='flex items-center justify-center h-full w-full'>
                <DonutChart
                    data={chartData.data}
                    filledColor={chartData.filledColor}
                />
            </div>
        </div>
    )
}

export default SugarChart
