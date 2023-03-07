import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link, useSearchParams } from 'react-router-dom'
import { Header, Footer, ClincAppointment, OnlineAppointment } from '../../Exports'
const MainAppintment = () => {
  const [searchQuery] = useSearchParams();
  const place = searchQuery.get('place')
  const atClinc = (place === 'clinc')
  const atOnline = (place === 'online')
  return (
    <div>
      <Header />
      <div className='py-32 mb-10 bg-[#F8F9FA]'>
        <div className='text-center space-y-5'>
          <p className='font-semibold text-2xl'>Book an appointment</p>
          <p className='text-gray-500 leading-loose '>Great doctor if you need your family member to get effective immediate assistance,<br /> emergency treatment or a simple consultation.</p>
          <div>
            <div className='flex gap-3 items-center justify-center'>
              <Link to='/' className='uppercase font-semibold hover:text-blue-500 hover:underline' >Doctris</Link>
              <BiChevronRight />
              <Link to='/book-appointment?place=clinc' className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline' >Appointment</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container px-0 md:max-w-3xl md:border my-5 rounded-lg overflow-hidden'>
        <div className='grid grid-cols-2 text-center border-b'>
          <Link to='?place=clinc' className={`bg-[#F8F9FA] py-3 font-medium ${atClinc && '!bg-blue-500 text-white'}`}>Clinc Appointment</Link>
          <Link to='?place=online' className={`bg-[#F8F9FA] py-3 font-medium ${atOnline && '!bg-blue-500 text-white'}`}>Online Appointment</Link>
        </div>
        <div className='p-5'>
          {atClinc && <ClincAppointment />}
          {atOnline && <OnlineAppointment />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainAppintment
