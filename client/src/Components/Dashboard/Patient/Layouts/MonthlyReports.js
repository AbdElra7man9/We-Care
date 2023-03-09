import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { motion } from 'framer-motion';
import Contact from './Profile/Contact';
const MonthlyReports = () => {
    const appointemnts = [
        {
            _id: '1',
            report: 'Treatment report',
            value: '84'
        }, {
            _id: '2',
            report: 'State of being report',
            value: '79'
        }, {
            _id: '3',
            report: 'Health department report',
            value: '95'
        }, {
            _id: '4',
            report: 'Questionnaire',
            value: '90'
        }, {
            _id: '5',
            report: 'Covid-19 report',
            value: '75'
        }, {
            _id: '6',
            report: 'Blood pressure report',
            value: '76'
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
            <div className='shadow-[.2px_.2px_3px_1px] h-[31rem] w-full pb-5 overflow-scroll hideScroll shadow-gray-100 rounded-lg p-5'>
                <div className='flex justify-between my-5'>
                    <h3 className='text-lg font-medium'>Monthly Reports</h3>
                    <BiDotsHorizontalRounded />
                </div>
                <div className='space-y-3'>
                    {appointemnts?.map(spec => (
                        <div key={spec?._id}>
                            <div className='flex justify-between text-gray-500 mb-2'>
                                <p>{spec?.report}</p>
                                <p>{spec?.value} %</p>
                            </div>
                            <div className='border border-gray-200 bg-gray-100 w-full rounded-full overflow-hidden h-4'>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${spec?.value}%` }}
                                    transition={{ ease: "easeOut", duration: 1 }}
                                    className='bg-blue-500 h-full rounded-full'
                                >
                                </motion.div>                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default MonthlyReports
