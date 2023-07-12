import Form from './Form';
import Image from 'next/image';
import Link from 'next/link';
export default function page() {
    (
        <div>
            <div className='container px-0 max-w-4xl flex place-content-center h-[80%] lg:mt-20 mb-5'>
                <div className='max-w-md'>
                    <div className='lg:border border-gray-300 px-8 items-center text-center rounded-lg lg:bg-white'>
                        <Link href="/" aria-label='home'>
                            <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                                <Image
                                    height={100}
                                    width={100}
                                    draggable={false}
                                    className='w-10 h-10 rounded-xl'
                                    src='/Images/logo-icon.png'
                                    alt=''
                                />
                                <p className='text-2xl font-bold dark:text-white'>We Care</p>
                            </div>
                        </Link>
                        <p className='text-xl font-semibold text-gray-400 mb-5'>
                            Sign up as a doctor as you can manage your appointments
                        </p>
                        <Form />
                    </div>
                    <div className='lg:border border-gray-300 justify-center flex md:mt-5 rounded-lg lg:bg-white'>
                        <p className="py-5 inline">
                            {`Don't have an account? `}
                            <Link
                                href="/auth/signin"
                                aria-label='sign in'
                                className='font-semibold text-blue-400'>
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

