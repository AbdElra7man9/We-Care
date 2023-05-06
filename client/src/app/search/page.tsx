import Footer from '@Components/app/Footer'
import Header from '@Components/app/Header'
import React from 'react'
import DoctorCart from './DoctorCart'

export default function page() {
    return (
        <div>
            <div className="h-16">
                <Header isFull={true}/>
            </div>
            <div className='container max-w-8xl'>
                <div className='grid grid-cols-1 lg:grid-cols-4 border rounded-xl dark:border-slate-600'>
                    <div></div>
                    <DoctorCart />
                </div>
            </div>
            <Footer />
        </div>
    )
}
