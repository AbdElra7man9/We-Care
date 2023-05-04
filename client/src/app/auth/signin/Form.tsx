'use client';
import React, { useEffect, useRef, FC, useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { ImSpinner7 } from 'react-icons/im';
import { signIn } from "next-auth/react"
import Link from 'next/link';
import GetError from '@lib/GetError';
import { BsGoogle } from 'react-icons/bs';
import { useSigninUserMutation } from '@Redux/APIs/AuthApi';
interface Inputs {
    email: string;
    password: string;
}
const Form: FC = ({ }) => {

    const userRef = useRef<HTMLInputElement>(null);
    const [inputs, setInputs] = useState<Inputs>({
        email: '',
        password: ''
    });

    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    const [SigninUser, { isLoading, isError, error }] = useSigninUserMutation();
    useEffect(() => {
        userRef.current?.focus()
    }, []);

    const SubmitSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = inputs;
        await SigninUser({ email, password }).unwrap()
            .then(() => {
                signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                })
            })
    }




    return (
        <form className='flex flex-col' onSubmit={SubmitSignIn}>
            <label className='text-sm text-gray-500 font-medium text-start my-1'>Your Email</label>
            <input
                type='email'
                ref={userRef}
                onChange={handleChange}
                name='email'
                className='inputfield'
                placeholder='Phone number username,or email'
            />
            <label className='text-sm text-gray-500 font-medium text-start my-1'>Your password</label>
            <input
                type='password'
                onChange={handleChange}
                name='password'
                className='inputfield'
                placeholder='Password'
            />
            <button
                type='submit'
                aria-label='submit'
                className='btn-primary mt-4 !mb-8'
            disabled={isLoading}
            >
                {isLoading ?
                    <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                        <ImSpinner7 />
                    </span> : 'Sign In'}
            </button>

            <Link
                href='/auth/forgetpassword'
                aria-label='forget password'
                className='text-blue-800 focus:text-blue-300 text-sm'>
                Forgot password ?
            </Link>
            <div className='flex justify-center mt-4'>
                <hr className='w-[40%] mt-3'></hr>
                <p className='mx-3 font-semibold text-gray-500'>OR</p>
                <hr className='w-[40%] mt-3'></hr>
            </div>
            <div className='flex gap-5'>
                <button
                    type='button'
                    aria-label='Sign In with Facebook'
                    onClick={() => signIn('facebook')}
                    className='bg-sky-100 text-blue-400 w-full py-2 my-3 rounded-md shadow-blue-200 shadow-md border border-blue-200'>
                    <span className='w-full flex justify-center items-center gap-3'>
                        <AiFillFacebook />
                        <p>Facebook</p>
                    </span>
                </button>
                <button
                    type='button'
                    aria-label='Sign In with Google'
                    onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })}
                    className='bg-sky-100 text-sky-400 w-full py-2 my-3 rounded-md shadow-blue-200 shadow-md border border-blue-200'>
                    <span className='w-full flex justify-center items-center gap-3'>
                        <BsGoogle />
                        <p>Google</p>
                    </span>
                </button>
            </div>
            <p className="py-5 text-sm inline">{`Don't have an account? `}
                <Link
                    href="/auth/signup"
                    aria-label='sign up'
                    className='font-semibold text-black'>
                    Sign up
                </Link>
            </p>
            {isError && <GetError error={error}/>}

        </form >
    )
}

export default Form