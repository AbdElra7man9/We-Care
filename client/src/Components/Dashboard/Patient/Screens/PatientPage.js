import React from 'react'
import { BsFillDropletFill, BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import { Link, useSearchParams } from 'react-router-dom'
import { Header, Footer, AppointmentsList, PaymentsList, ProfileSettings, Contact } from '../../../Exports'
import { FaAddressCard } from 'react-icons/fa';
import { motion } from 'framer-motion';
const PatientPage = () => {
  const spec = {
    value: 90
  };
  const [searchQuery] = useSearchParams();
  const place = searchQuery.get('user')
  const profile = (place === 'profile')
  const profileSettings = (place === 'settings')
  const INFO = ({ Icon, Title, Value }) => {
    return (
      <div className='flex items-center gap-3'>
        <span className='text-blue-600'>{Icon}</span>
        <p className='text-lg'>{Title}</p>
        <p className='text-gray-400'>{Value}</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className='container my-36 lg:max-w-[60rem] xl:max-w-[80rem] duration-300 flex items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5'>
          <div className='shadow-[.2px_.2px_3px_1px] shadow-gray-100 overflow-hidden rounded-lg'>
            <div className='relative'>
              <img className='w-full relative' src='https://shreethemes.in/doctris/layouts/assets/images/bg/bg-profile.jpg' alt='' />
              <img className='w-24 h-24 rounded-full absolute flex inset-x-0 !left-[40%] -bottom-10 shadow-lg'
                src='https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg' alt='' />
            </div>
            <div className='text-center w-full mt-12'>
              <p className='font-medium text-lg'>Christopher Burrell</p>
              <p className='text-gray-500'>25 Years old</p>
            </div><hr />
            <div className='lg:p-5 px-3 py-5'>
              <div className='my-5'>
                <div className='flex justify-between text-gray-500 mb-2'>
                  <p className='font-medium text-gray-600'>Complete your profile</p>
                  <p className='font-medium'>{spec?.value} %</p>
                </div>
                <div

                  className='bg-gray-100 w-full rounded-full overflow-hidden h-4'>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${spec?.value}%` }}
                    transition={{ ease: "easeOut", duration: 1 }} className='bg-blue-500 h-full rounded-full'
                  >
                  </motion.div>
                </div>
              </div>
              <div className='space-y-3'>
                <INFO Icon={<BsFillPersonFill size={23} />} Title='Gender' Value='Female' />
                <INFO Icon={<MdMarkEmailRead size={23} />} Title='Birthday' Value='19th January 1995' />
                <INFO Icon={<BsTelephoneFill size={22} />} Title='Phone No' Value='+(125) 458-8547' />
                <INFO Icon={<FaAddressCard size={22} />} Title='Address' Value='Sydney, Australia' />
                <INFO Icon={<BsFillDropletFill size={22} />} Title='Blood Group' Value='B +' />
              </div>
            </div>
          </div>
          <div className='shadow-[.2px_.2px_3px_1px] shadow-gray-100 overflow-hidden rounded-lg col-span-2'>
            <div className='container px-0 max-w-full rounded-lg overflow-hidden'>
              <div className='grid grid-cols-2 text-center text-lg border-b'>
                <Link to='?user=profile' className={`bg-[#F8F9FA] py-3 font-medium ${profile && '!bg-blue-500 text-white'}`}>Profile</Link>
                <Link to='?user=settings' className={`bg-[#F8F9FA] py-3 font-medium ${profileSettings && '!bg-blue-500 text-white'}`}>Profile Settings</Link>
              </div>
              <div className='p-5'>
                {profile &&
                  <div className='space-y-5'>
                    <h3 className='text-lg font-medium'>Introduction</h3>
                    <p className='text-gray-400 leading-loose'>Web designers to occupy the space which will later be filled with 'real' content. This is required when,
                      for example, the final text is not yet available. Dummy text is also known as 'fill text'.
                      Dummy texts have been in use by typesetters since the 16th century.</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                      <AppointmentsList />
                      <PaymentsList />
                    </div>
                    <Contact />
                  </div>

                }
                {profileSettings && <ProfileSettings />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PatientPage
