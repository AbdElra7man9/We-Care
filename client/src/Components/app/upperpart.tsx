import Link from 'next/link';
import Image from 'next/image';
import { BsFillHandbagFill, BsFillClockFill } from 'react-icons/bs';
import { FaHeartbeat } from 'react-icons/fa';

export default function Upperpart() {
    const ChartBox = () => {
        return (
            <div className='absolute -bottom-[20rem] md:-bottom-20 inset-x-0'>
                <div className='container px-0 max-w-2xl lg:max-w-4xl grid grid-cols-1 md:grid-cols-3 border bg-white dark:border-slate-700 dark:text-white rounded-xl overflow-hidden'>
                    <div className='w-full bg-[#F8F9FA] dark:bg-slate-800 p-5'>
                        <div className='space-y-3'>
                            <FaHeartbeat size={25} style={{ color: 'blue' }} />
                            <h4 className='text-gray-600 dark:text-slate-300 text-lg font-medium'>
                                Emergency Cases
                            </h4>
                            <p className='text-gray-500 dark:text-slate-500 leading-7 text-sm'>
                                This is required when, for example, the is not yet available.
                                Dummy text is also known as fill text.
                            </p>
                        </div>
                    </div>
                    <div className='w-full bg-white dark:bg-slate-900 p-5'>
                        <div className='space-y-3'>
                            <BsFillHandbagFill size={25} style={{ color: 'blue' }} />
                            <h4 className='text-gray-600 dark:text-slate-300 text-lg font-medium'>Doctors Timetable</h4>
                            <p className='text-gray-500 dark:text-slate-500 leading-7 text-sm'>
                                This is required when, for example, the is not yet available.
                                Dummy text is also known as fill text.
                            </p>
                        </div>
                    </div>
                    <div className='w-full bg-[#F8F9FA] dark:bg-slate-800 p-5'>
                        <div className='space-y-3'>
                            <BsFillClockFill size={25} style={{ color: 'blue' }} />
                            <h4 className='text-gray-600 dark:text-slate-300 text-lg font-medium'>Opening Hours</h4>
                            <div className='flex justify-between'>
                                <div className='text-gray-500 dark:text-slate-500 leading-7'>
                                    <span className='block'>Monday-Friday</span>
                                    <span className='block'>Saturday</span>
                                    <span className='block'>Sunday</span>
                                </div>
                                <div className='text-blue-500 whitespace-nowrap'>
                                    <span className='block'>8:00 - 20:00</span>
                                    <span className='block'>8.00 - 18.00</span>
                                    <span className='block'>8.00 - 14.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='h-[50rem] md:h-[60rem] duration-200 container max-w-full px-0 relative '>
                <Image
                    height={800}
                    width={800}
                    className='h-full w-full object-cover'
                    src='/Images/bg.jpg'
                    alt=''
                />
                <div className="absolute inset-0 w-full h-full bg-[rgba(60,72,88,.7)]"></div>
                <div
                    className='container px-5 sm:max-w-[50rem] md:max-w-[50rem] lg:max-w-[60rem]
                  xl:max-w-[80rem] duration-300 absolute inset-0 flex items-center text-white '
                >
                    <div className='space-y-5 font-bold'>
                        <h4 className='leading-normal text-4xl lg:text-5xl'>
                            Meet the
                            <br />
                            Best doctor</h4>
                        <h5 className='leading-snug text-xl text-gray-400 font-normal'>
                            Great doctor if you need your family member to get effective immediate assistance,
                            <br /> emergency treatment or a simple consultation.
                        </h5>
                        <div className='py-3'>
                            <Link
                                href='/search'
                                aria-label='booking an appointment'
                                className='bg-blue-500 rounded-lg p-3 px-4 font-medium'>
                                Take Appointment
                            </Link>
                        </div>
                        <h5
                            className='leading-snug text-xl text-gray-400 font-normal'>
                            T&C apply. Please read Terms and Conditions
                        </h5>
                    </div>
                </div>
                <ChartBox />
            </div>
        </>
    )
}
