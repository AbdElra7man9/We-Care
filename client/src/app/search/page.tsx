import Footer from '@Components/app/Footer'
import Header from '@Components/app/Header'
import Chat from '@Components/GPT3.5/Chat'
import React from 'react'
import DoctorCart from './DoctorCart'
import Filter from './Filter'

export default function page() {
    return (
        <div>
            <div className="h-16">
                <Header isFull={true} />
            </div>
            <Chat />
            <div className='container max-w-8xl mt-32'>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    <Filter />
                    <div className='border rounded-xl dark:border-slate-600 w-full col-span-3'>
                        <DoctorCart />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
