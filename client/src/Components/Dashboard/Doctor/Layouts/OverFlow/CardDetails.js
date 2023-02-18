import React from 'react'

const CardDetails = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5'>
            <div className='border w-full rounded-lg h-96 p-5'>
                <p className='text-lg text-gray-700 uppercase font-medium'>Today's Appointment</p>
                <div className='flex gap-x-5 mt-5 w-full'>
                    <p className='text-9xl text-gray-500 font-semibold'>4</p>
                    <div className='w-full space-y-4'>
                        <div className='p-4 border rounded-2xl grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 justify-end'>
                            <div>
                                <p className='text-sm text-gray-600'>Treatment</p>
                                <p className='font-medium'>Consultaion</p>
                            </div>
                            <p>09:00</p>
                        </div>
                        <div className='p-4 border rounded-2xl flex gap-x-5 items-center justify-between'>
                            <div>
                                <p className='text-sm text-gray-600'>Treatment</p>
                                <p className='font-medium'>Consultaion</p>
                            </div>
                            <p>09:00</p>
                        </div>
                        <div className='p-4 border rounded-2xl flex gap-x-5 items-center justify-between'>
                            <div>
                                <p className='text-sm text-gray-600'>Treatment</p>
                                <p className='font-medium'>Consultaion</p>
                            </div>
                            <p>09:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border w-full rounded-lg h-96 p-5'>
                <p className='text-lg text-gray-700 uppercase font-medium'>Top Treatment</p>
                <div className='flex gap-x-5 mt-5 w-full'>
                    <ul className='list-decimal text-lg font-medium px-5 text-gray-500 space-y-5'>
                        <li>Consultaion</li>
                        <li>Scaling</li>
                        <li>Root Canal</li>
                        <li>Bleaching</li>
                        <li>Winsdom Teeth Removal</li>
                    </ul>
                </div>
            </div>

            <div className='border w-full rounded-lg h-96 p-5 space-y-5'>
                <div>
                    <p className='text-lg text-gray-700 uppercase font-medium'>Total patien this month</p>
                    <p className='text-7xl mt-5 text-gray-500 font-semibold'>15</p>
                </div>
                <div>
                    <p className='text-lg text-gray-700 uppercase font-medium'>Total patien all time</p>
                    <p className='text-7xl mt-5 text-gray-500 font-semibold'>103</p>
                </div>
            </div>



            <div className='border w-full rounded-lg h-96 p-5 space-y-5'>
                <div className='space-y-3'>
                    <p className='text-lg text-gray-700 uppercase font-medium'>Jaspel</p>
                    <p className='text-5xl mt-5 text-gray-500 font-semibold'>$23,000</p>
                    <p className='text-xl font-light'>This Month So Far</p>
                </div><hr />
                <div className='space-y-3'>
                    <p className='text-5xl mt-5 text-gray-500 font-semibold'>$23,000</p>
                    <p className='text-xl font-light'>Pervios Months</p>
                </div>
            </div>


        </div>
    )
}

export default CardDetails
