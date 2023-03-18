import React from 'react'
import { ColumnChart, Gridstatics, RadialBarPlot } from '../../../Exports'

const MainOverflow = () => {
    return (
        <div className='container max-w-full p-5'>
            <div>
                <p className='mb-3 text-xl font-medium'>Dashboard</p>
                <Gridstatics />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                <div className='col-span-2'>
                    <p className='font-medium text-lg my-2'>Patient visit by gender</p>
                    <ColumnChart />
                </div>
                <div className='col-span-1'>
                    <p className='font-medium text-lg my-2'>Patients by Department</p>
                    <RadialBarPlot />
                </div>
            </div>
        </div>
    )
}

export default MainOverflow
