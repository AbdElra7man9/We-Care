import React from 'react'
import { ColumnChart, CardDetails, RightPartOverFlow } from '../../../Exports'

const OverFlow = () => {

    return (
        <div className='container px-5 max-w-full'>
            <p className='text-3xl font-bold text-gray-700 py-5'>Good morning, Dr Adam</p>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-10'>
                <div>
                    <div className='w-full'>
                        <ColumnChart />
                    </div>
                </div>
                <RightPartOverFlow />
            </div>
            <CardDetails />
        </div>
    )
}

export default OverFlow
