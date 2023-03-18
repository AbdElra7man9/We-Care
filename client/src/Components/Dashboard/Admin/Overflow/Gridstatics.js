import React from 'react'
import { FaBed } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'

const Gridstatics = () => {
    const SingleGrid = ({ Value, Title, Icons }) => {
        return (
            <div className='border rounded-lg p-5 flex gap-5 items-center'>
                <div className='bg-blue-100 text-blue-500 flex justify-center items-center w-16 h-16 rounded-lg'>{Icons}</div>
                <div>
                    <p>{Value}</p>
                    <p className='text-gray-400'>{Title}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-6 gap-5 w-full'>
            <SingleGrid Value='525' Title='Patients' Icons={<FaBed size={25} />} />
            <SingleGrid Value='$2164' Title='Avg. costs' Icons={<IoDocumentText size={25} />} />
            <SingleGrid Value='112' Title='Staff Members' Icons={<IoDocumentText size={25} />} />
            <SingleGrid Value='16' Title='Vehicles' Icons={<IoDocumentText size={25} />} />
            <SingleGrid Value='220' Title='Appointment' Icons={<IoDocumentText size={25} />} />
            <SingleGrid Value='10' Title='Operations' Icons={<IoDocumentText size={25} />} />
        </div>
    )
}

export default Gridstatics
