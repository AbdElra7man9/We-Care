'use client';
import React, { useEffect, useRef, useState } from 'react'
import { ImSpinner7 } from 'react-icons/im'
import { useForgetPasswordMutation } from '@/Redux/APIs/AuthApi';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function page() {
  const router = useRouter();
  const userRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState<string>('');
  useEffect(() => {
    if (localStorage.getItem("persist") === 'true') {
      router.push("/");
    }
  })
  const [email, setEMail] = useState('')

  useEffect(() => {
    userRef.current?.focus()
  }, []);
  const [ForgetPassword, { isError, error, isLoading }] = useForgetPasswordMutation();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await ForgetPassword({ email }).unwrap()
      .then(() => {
        setSuccess(`We Send a reset message to your email ${email}`);
        setEMail('')
      })
      .catch((err: any) => {
        console.log(err?.data?.message);
      });
  }

  return (
    <>
      <div className='container px-5 max-w-5xl flex gap-1 place-content-center mt-[2rem] md:mt-[6rem] mb-5 md:mb-28'>
        <div className='container px-3 max-w-md md:mt-16'>
          <div className='md:border rounded-lg  border-gray-300 md:max-w-[90%] ss:px-5 md:px-12 items-center text-center md:bg-white'>
            <Link href="/">
              <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                <img className='w-10 h-10 rounded-xl'
                  src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                <p className='text-2xl font-bold'>Doctris</p>
              </div>
            </Link>
            <div className='text-lg space-y-2 py-4'>
              <p className='font-medium'>Trouble logging in?</p>
              <p className='text-gray-400 text-sm'>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
            </div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <input type='email' ref={userRef} onChange={(e) => setEMail(e.target.value)} name='email' className='inputfield' placeholder='Phone number username,or email' />
              <button type='submit' className='btn-primary mt-4 !mb-8' disabled={isLoading}>
                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'><ImSpinner7 /> </span> : 'Send Otp Reset'}</button>
              <div className='flex justify-center mt-4'>
                <hr className='w-[40%] mt-3'></hr>
                <p className='mx-3 font-semibold text-gray-500'>OR</p>
                <hr className='w-[40%] mt-3'></hr>
              </div>

              <Link href='/signup' className='text-blue-800 focus:text-blue-300 md:mb-7 text-sm font-medium mt-3'>Create New Account ?</Link>
              {isError && <span className="text-red-500 pb-3 font-poppins font-medium">{JSON.stringify(error)}</span>}
              {success && <span className="text-green-500 pb-3 font-poppins font-medium">{success}</span>}
            </form>
          </div>
          <div className='md:border rounded-lg max-w-[90%] border-gray-300 justify-center flex mt-5 md:bg-white'>
            <Link href="/signin" className='font-semibold text-blue-400 py-4'>Back to login</Link>
          </div>
        </div>
      </div>
    </>
  )
}
