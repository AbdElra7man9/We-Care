'use client';
import React, { useEffect, useRef, useState } from 'react'
import { useRequestOTP2Mutation, useVerifyEmailMutation } from '../../../Redux/APIs/AuthApi';
import { ImSpinner7 } from 'react-icons/im';
// import { setCredentials } from '../Redux/Slices/UserSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
export default function page() {
    const [pin, setPin] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const userRef = useRef<HTMLInputElement>(null);
    // useEffect(() => {
    //     userRef.current.focus()
    // }, []);
    const dispatch = useDispatch()
    const route = useRouter();
    const SearchQuery = useSearchParams();
    const email = SearchQuery.get('email');

    const [VerifyEmail, { isLoading, isError, error }] = useVerifyEmailMutation();
    const [RequestOTP2, { isError: isErrorReq2opt, error: errorReq2opt }] = useRequestOTP2Mutation();

    const SubmitActivateEmail = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const data = { pin }
        await VerifyEmail(data).unwrap()
            .then(() => {
                route.push(`/`)
                setPin('');
            })
    }
    const RequestOTP2Activate = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const data = { email }
        // await RequestOTP2(data).unwrap()
        //     .then(({ token, user }) => {
        //         setSuccess(`A new confirmation code send to ${email}`)
        //         dispatch(setCredentials({ token, user }));

        //     }).catch(err => {
        //         console.log(err?.data?.message)
        //     })
    }
    return (
        <div className='h-full dark:bg-slate-900'>
            <div className='container px-5 max-w-5xl flex gap-1 place-content-center mt-[2rem] md:mt-[6rem] md:mb-28'>
                <div className='container px-3 max-w-md md:mt-16'>
                    <div className='md:border rounded-lg md:py-10 dark:bg-slate-800 dark:border-slate-500 dark:text-white
                     border-gray-300 md:max-w-[90%] ss:px-5 md:px-10 items-center text-center md:bg-white'>
                        <Link href="/">
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
                        <div className='mb-5 space-y-2'>
                            <p className='font-medium text-base dark:text-slate-400'>Enter Configuration code</p>
                            <span className='dark:text-slate-400'>Enter the confirmation code we sent to {email}
                                <button
                                    // onClick={RequestOTP2Activate}
                                    className='text-blue-500 font-semibold'>Resend Code
                                </button>
                            </span>
                        </div>
                        <form className='flex flex-col'
                            onSubmit={SubmitActivateEmail}>
                            <div className='flex gap-3 '>
                                <input
                                    type='number'
                                    ref={userRef}
                                    onChange={(e) => setPin(e.target.value)}
                                    value={pin}
                                    name='email'
                                    className='inputfield appearance-none !w-full'
                                    placeholder='Confirmation code' />
                            </div>
                            <button
                                type='submit'
                                className='btn-primary mt-4 !mb-4'
                                disabled={isLoading}>
                                {isLoading ?
                                    <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                                        <ImSpinner7 />
                                    </span> : 'Next'
                                }
                            </button>
                            <Link
                                href='/signin'
                                className='font-medium text-blue-500 text-md focus:text-blue-300 '>
                                Go Back?
                            </Link>
                            {(isError || isErrorReq2opt) &&
                                <span className="text-red-500 pb-3 font-poppins font-medium">
                                    {error?.data?.message as string || errorReq2opt?.data?.message as string}
                                </span>
                            }
                            {success &&
                                <span className="text-green-500 pb-3 font-poppins font-medium">
                                    {success}
                                </span>
                            }
                        </form>
                    </div>
                    <div className='md:border rounded-lg max-w-[90%] border-gray-300 justify-center flex mt-5 md:bg-white dark:bg-slate-800 dark:text-slate-300'>
                        <p className="py-5 inline">have an account ?
                            <Link href="/signin" className='font-semibold text-blue-400'> Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
