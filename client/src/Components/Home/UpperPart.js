import React from 'react'
import { Link } from 'react-router-dom'

const UpperPart = () => {
    return (
        <div className='container max-w-8xl'>
            <div class="custom-shape-divider-bottom-1676817977">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='flex justify-between items-center p-5 whitespace-nowrap'>
                <div className='flex items-center gap-2'>
                    <img className='w-10 h-12 rounded-xl'
                        src='https://res.cloudinary.com/abdo9/image/upload/v1676727644/b425ac90714005.5e1ee66a1d36b_2_chd7s0.png' alt='' />
                    <div>
                        <p className='text-2xl font-bold'>Zendenta</p>
                        <p className='text-sm font-light'>Doctor page mangement</p>
                    </div>
                </div>
                <div className='list-none flex gap-5 text-xl text-gray-500 font-semibold'>
                    <Link to='/' className='hover:text-purple-600 hover:border-b-2 hover:border-purple-500 border-transparent border-b-2'>Home</Link>
                    <Link>Find Doctor</Link>
                    <Link>Our Services</Link>
                    <Link>About Us</Link>
                    <Link>Contact</Link>
                </div>
                <div className='flex gap-5 items-center'>
                    <Link to='/signup' className='text-xl font-semibold text-slate-700 outline-none'>Sign Up</Link>
                    <Link to='/signin' className='text-xl p-4 px-8 bg-blue-500 text-white rounded-full outline-none '>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default UpperPart
