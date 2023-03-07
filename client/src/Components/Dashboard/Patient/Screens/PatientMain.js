import React from 'react'
import { DonutPlot, AreaPlot } from '../../../Exports';
import { MdWaterDrop } from 'react-icons/md'
const PatientMain = () => {
    return (
        <>
            <div className='grid grid-cols-4'>
                <div className='space-y-3'>
                    <div className='shadow-[.2px_.2px_3px_1px] h-96 shadow-gray-200 rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <p className='font-medium'>Water</p>
                                <p className='text-sky-500 bg-sky-100 rounded-full border border-sky-200 text-sm px-3 font3medium'>93%</p>
                            </div>
                            <div className='text-blue-500'><MdWaterDrop size={20} /></div>
                        </div>
                        <DonutPlot />
                    </div>
                    <div className='shadow-[.2px_.2px_3px_1px] h-96 shadow-gray-200 rounded-lg p-5'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <p className='font-medium'>Water</p>
                                <p className='text-sky-500 bg-sky-100 rounded-full border border-sky-200 text-sm px-3 font3medium'>93%</p>
                            </div>
                            <div className='text-blue-500'><MdWaterDrop size={20} /></div>
                        </div>
                        <AreaPlot />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientMain
