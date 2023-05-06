import Link from 'next/link';
import Image from 'next/image';
import Form from './Form';
export default function page() {

    return (
        <div className='h-full dark:bg-slate-900'>
            <div className='container px-5 max-w-5xl flex gap-1 place-content-center mt-[2rem] md:mt-[6rem] md:mb-28'>
                <div className='container px-3 max-w-md md:mt-16'>
                    <div className='md:border rounded-lg md:py-10 dark:bg-slate-900 dark:border-slate-500 dark:text-white
                     border-gray-300 md:max-w-[90%] ss:px-5 md:px-10 items-center text-center md:bg-white '>
                        <Link href="/" aria-label='home'>
                            <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                                <Image
                                    width={100}
                                    height={100}
                                    className='w-10 h-10 rounded-xl'
                                    src='/Images/logo-icon.png'
                                    alt='' />
                                <p className='text-2xl font-bold'>Doctris</p>
                            </div>
                        </Link>
                       
                        <Form />
                    </div>
                    <div className='md:border rounded-lg max-w-[90%] border-gray-300 justify-center flex mt-5 md:bg-white
                         dark:bg-slate-900 dark:border-slate-500'>
                        <p className="py-5 inline">have an account ?
                            <Link
                                href="/auth/signin"
                                aria-label='sign in'
                                className='font-semibold text-blue-400'>
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
