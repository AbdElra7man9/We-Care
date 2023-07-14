import AppointmentsList from '@app/patient/(components)/AppointmentsList'
import Contact from '@app/patient/(components)/Contact'
import PaymentsList from '@app/patient/(components)/PaymentsList'
import { FC } from 'react'
import Summary from './Summary'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (

        <div className='space-y-5'>
            <Summary />
            {/* <h3 className='text-lg font-medium'>doctor here</h3> */}
            {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <AppointmentsList status='now' />
                <PaymentsList />
            </div> */}
            <Contact dashLink='/doctor/doctor-dashboard' messagesLink='/doctor/doctor-messages'/>
        </div>
    )
}

export default page