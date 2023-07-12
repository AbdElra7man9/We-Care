import AppointmentsList from '@app/patient/(components)/AppointmentsList'
import Contact from '@app/patient/(components)/Contact'
import React from 'react'
import AppointmentChart from './(GridCharts)/AppointmentChart'
import CanceledChart from './(GridCharts)/CanceledChart'
import PatientsChart from './(GridCharts)/PatientsChart'
import UrgentChart from './(GridCharts)/UrgentChart'

export default function page() {
  return (
    <div className='container max-w-full'>
      <p className='text-xl lg:text-2xl font-bold text-gray-700 py-5 px-5 mt-16 lg:px-0 dark:text-white'>Good morning, Dr Adam</p>
      <div className='flex flex-col gap-5'>
        <div className='grid grid-cols-1 xl:grid-cols-4 gap-5'>
          <AppointmentChart />
          <PatientsChart />
          <UrgentChart />
          <CanceledChart />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
          <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[36rem] overflow-hidden shadow-gray-100 rounded-lg p-5'>
            <AppointmentsList status="now" />
          </div>
          <div className='shadow-[.2px_.2px_3px_1px] h-[36rem] dark:shadow-slate-700 overflow-hidden shadow-gray-100 rounded-lg p-5'>
            <AppointmentsList status="past" />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <Contact />
        </div>
      </div>
    </div>
  )
}
