import { useState, useEffect } from 'react';
import { BsFillBellFill, BsHouseFill, BsJustifyLeft, BsPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { FeatureAction } from '../../../../Redux/Slices/FeaturesSlice';
import { useParams } from 'react-router-dom';

const HeaderDoc = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState();
    const { dash } = useParams();
    useEffect(() => {
        (dash === 'dashboard') && setTitle('Dashboard OverFlow');
        (dash === 'calender') && setTitle('Calender');
        (dash === 'patientlist') && setTitle('Patient List');
        (dash === 'messages') && setTitle('Messages');
        (dash === 'payment') && setTitle('Payment');
        (dash === 'settings') && setTitle('Settings');
    }, [dash])
    return (
        <div className='container px-0 max-w-full bg-white'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-3 items-center'>
                    <button
                        onClick={() => dispatch(FeatureAction.setDocSide(true))}
                        className='text-gray-500 lg:hidden text-lg lg:text-3xl'><BsJustifyLeft />
                    </button>
                    <span className='text-blue-600 text-lg lg:text-3xl'><BsHouseFill /></span>
                    <p className='text-lg lg:text-2xl font-bold whitespace-nowrap'>{title}</p>
                </div>
                <div className='flex gap-3'>
                    <input type='seach' placeholder='Search' className='border w-60 p-2 outline-none rounded-3xl text-gray-600 hidden md:block' />
                    <button className='rounded-full w-10 h-10 text-white bg-blue-600 flex justify-center items-center hover:bg-blue-700 focus:bg-blue-800'>
                        <BsPlus size={25} />
                    </button>
                    <button className='rounded-full w-10 h-10 border text-gray-400 flex justify-center items-center hover:bg-gray-100 focus:bg-gray-200'>
                        <BsFillBellFill size={18} />
                    </button>
                </div>
            </div><hr />
        </div>
    )
}

export default HeaderDoc
