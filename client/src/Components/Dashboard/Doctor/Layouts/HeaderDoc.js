import React from 'react'
import { BsFillBellFill, BsHouseFill, BsJustifyLeft, BsPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { FeatureAction } from '../../../../Redux/Slices/FeaturesSlice';

const HeaderDoc = () => {
    const dispatch = useDispatch();

    return (
        <div className='container px-0 max-w-full bg-white'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-3 items-center'>
                <button
                        onClick={() => dispatch(FeatureAction.setDocSide(true))}
                        className='text-gray-500 lg:hidden'><BsJustifyLeft size={25} />
                    </button>
                    <span className='text-blue-600'><BsHouseFill size={25} /></span>
                    <p className='text-2xl font-bold'>Dashboard OverFlow</p>
                </div>
                <div className='flex gap-3'>
                    <input type='seach' placeholder='Search' className='border w-60 p-2 outline-none rounded-3xl text-gray-600' />
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
