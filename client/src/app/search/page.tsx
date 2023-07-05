import Footer from '@Components/app/Footer'
import Header from '@Components/app/Header'
import Chat from '@Components/GPT3.5/Chat'
import React from 'react'
import DoctorCart from './DoctorCart'
import Filter from './Filter'
import SearchPL from './SearchPL'

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
                    <div className='col-span-3'>
                        <SearchPL />
                        <div className='w-full '>
                            <DoctorCart />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
