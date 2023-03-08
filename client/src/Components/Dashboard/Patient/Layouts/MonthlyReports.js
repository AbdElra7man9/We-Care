import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom';
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
                                <div className='bg-blue-500 h-full rounded-full' style={{ width: `${spec?.value}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full'>
                <h3 className='text-xl font-medium p-5'>Cantact Doctor</h3>
                <div className='shadow-[.2px_.2px_3px_1px] h-[15rem] w-full shadow-gray-100 flex justify-center items-center rounded-lg p-5'>
                    <div className='text-center flex justify-center w-full'>
                        <div className='w-full space-y-4'>
                            <Link to='/' className='bg-blue-100 text-blue-500 rounded-full flex items-center justify-center border w-20 h-20 mx-auto'>
                                <FaPaperPlane size={25} rotate={45} />
                            </Link>
                            <h2 className='text-xl text-gray-600 font-medium'>New Messages</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonthlyReports
