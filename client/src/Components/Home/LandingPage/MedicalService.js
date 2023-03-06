import React from 'react'
import { AiFillEye } from 'react-icons/ai'

const MedicalService = () => {
    const Spici = ({ Icon, Title, Des }) => {
        return (
            <div className='space-y-5'>
                <div className='bg-blue-100 flex justify-center items-center h-16 w-16 rounded-md text-blue-600'>{Icon}</div>
                <p className='font-medium text-lg text-gray-800'>{Title}</p>
                <p className='text-sm text-gray-500'>There is now an abundance of readable dummy texts required purely to fill a space.</p>
            </div>
        )
    }

    return (
        <div className='container px-5 max-w-7xl'>
            <div className='text-center space-y-3'>
                <h3 className='text-2xl font-medium'>Our Medical Services</h3>
                <p className='text-gray-400 leading-loose'>Great doctor if you need your family member to get effective immediate assistance,<br /> emergency treatment or a simple consultation.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-8 py-12'>
                <Spici Icon={<AiFillEye size={25} />} Title='Eye Care' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
                <Spici Icon={<AiFillEye size={25} />} Title='Psychotherapy' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
                <Spici Icon={<AiFillEye size={25} />} Title='Primary Care' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
                <Spici Icon={<AiFillEye size={25} />} Title='Dental Care' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
                <Spici Icon={<AiFillEye size={25} />} Title='Orthopedic' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
                <Spici Icon={<AiFillEye size={25} />} Title='Cardiology' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
                <Spici Icon={<AiFillEye size={25} />} Title='Gynecology' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
                <Spici Icon={<AiFillEye size={25} />} Title='Neurology' Des='There is now an abundance of readable dummy texts required purely to fill a space.' />
            </div>
        </div>
    )
}

export default MedicalService
