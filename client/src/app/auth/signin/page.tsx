import Link from 'next/link';
import Image from 'next/image';
import Form from './Form';

export default function page(){

  return (
    <>
      <div className='container px-5 max-w-5xl flex gap-1 place-content-center mt-[2rem] md:mt-[6rem] mb-5 md:mb-28'>
        <div className='container px-3 max-w-md md:mt-16'>
          <div className='md:border rounded-lg  border-gray-300 md:max-w-[90%] 
            ss:px-5 md:px-6 items-center text-center md:bg-white dark:bg-slate-900 dark:border-slate-500'>
            <Link href="/" aria-label='home'>
              <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                <Image
                  height={200}
                  width={200}
                  className='w-10 h-10 rounded-xl'
                  src='/Images/logo-icon.png'
                  alt=''
                />
                <p className='text-2xl font-bold'>We Care</p>
              </div>
            </Link>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}