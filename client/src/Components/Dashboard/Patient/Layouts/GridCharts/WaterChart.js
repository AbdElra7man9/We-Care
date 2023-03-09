import React from 'react'
import { MdWaterDrop } from 'react-icons/md'
import DonutPlot from '../Graphs/DonutPlot'

const WaterChart = () => {
    return (
        <div className='shadow-[.2px_.2px_3px_1px] h-96 shadow-gray-100 rounded-lg p-5'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <p className='font-medium'>Water</p>
                    <p className='text-sky-500 bg-sky-100 rounded-full border border-sky-200 text-sm px-3 font-medium'>93%</p>
                </div>
                <div className='text-blue-500'><MdWaterDrop size={20} /></div>
            </div>
            <DonutPlot />
        </div>
    )
}

export default WaterChart
