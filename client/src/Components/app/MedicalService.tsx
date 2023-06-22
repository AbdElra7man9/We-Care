import { docsConfig, MedicalProps } from '@config/docsConfig';
import React from 'react'

const MedicalService: React.FC = () => {
    const Spici = ({ Icon, Title, Des }: MedicalProps) => {
        return (
            <div className='space-y-5'>
                <div
                    className='bg-blue-100 flex justify-center items-center h-16 w-16 rounded-md text-blue-600 dark:bg-slate-800 dark:text-blue-700'>
                    {Icon}
                </div>
                <p className='font-medium text-lg text-gray-800 dark:text-slate-100'>{Title}</p>
                <p className='text-sm text-gray-500 dark:text-slate-500'>{Des}</p>
            </div>
        )
    }

    return (
        <div className='container px-5 max-w-7xl select-none dark:text-white'>
            <div className='text-center space-y-3'>
                <h3 className='text-2xl font-medium'>Our Medical Services</h3>
                <p className='text-gray-400 leading-loose'>
                    Great doctor if you need your family member to get effective immediate assistance,
                    <br />
                    emergency treatment or a simple consultation.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-8 py-12'>
                {docsConfig.Services.map((item, index) => (
                    <div key={index}>
                        <Spici Icon={item.Icon} Title={item.Title} Des={item.Des} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MedicalService
