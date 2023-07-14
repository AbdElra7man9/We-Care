'use client';
import React, { useEffect, useRef, FC, useState } from 'react'
import { useRequestOTP2Mutation, useVerifyEmailMutation } from '@Redux/APIs/AuthApi';
import { ImSpinner7 } from 'react-icons/im';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import GetError from '@lib/GetError';
interface FormProps {

}

const Form: FC<FormProps> = ({ }) => {
    const [pin, setPin] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const userRef = useRef<HTMLInputElement>(null);
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     userRef.current.focus()
    // }, []);
    const route = useRouter();
    // const query = useSearchParams();
    // const email = query?.get('email') as string | undefined;

    const [VerifyEmail, { isLoading, isError, error }] = useVerifyEmailMutation();
    const [RequestOTP2, { isError: isErrorReq2opt, error: errorReq2opt }] = useRequestOTP2Mutation();

    const SubmitActivateEmail = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const data = { pin }
        await VerifyEmail(data).unwrap()
            .then(() => {
                route.push(`/auth/signin`)
                setPin('');
            })
    }
    const RequestOTP2Activate = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        // const data = { email }
        // await RequestOTP2(data).unwrap()
        //     .then(({ token, user }) => {
        //         setSuccess(`A new confirmation code send to ${email}`)
        //         dispatch(setCredentials({ token, user }));

        //     }).catch(err => {
        //         console.log(err?.data?.message)
        //     })
    }
    return (
        <>
            <div className='mb-5 space-y-2'>
                <p className='font-medium text-base dark:text-slate-400'>Enter Configuration code</p>
                <span className='dark:text-slate-400'>Enter the confirmation code we sent to
                 {/* {email} */}
                    <button
                        // onClick={RequestOTP2Activate}
                        aria-label='submit'
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
                    aria-label='submit'
                    className='btn-primary mt-4 !mb-4'
                    disabled={isLoading}>
                    {isLoading ?
                        <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                            <ImSpinner7 />
                        </span> : 'Next'
                    }
                </button>
                <Link
                    href='/auth/signin'
                    aria-label='sign in'
                    className='font-medium text-blue-500 text-md focus:text-blue-300 '>
                    Go Back?
                </Link>
                {isError && <GetError error={error} />}
                {success &&
                    <span className="text-green-500 pb-3 font-poppins font-medium">
                        {success}
                    </span>
                }
            </form>
        </>
    )
}

export default Form