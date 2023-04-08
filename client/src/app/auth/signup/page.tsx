'use client';
import React, { useEffect, useRef, useState } from 'react'
import { useSignupMutation } from '@Redux/APIs/AuthApi';
import { ImSpinner7 } from 'react-icons/im'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import GetError from '@lib/GetError';
import Image from 'next/image';
const SignUp = () => {
    const router = useRouter();
    const userRef = useRef<HTMLInputElement>(null);
    // useEffect(() => {
    //     if (localStorage.getItem("Logedin ?")) {
    //         navigate("/");
    //     }
    // })
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: '',
        passwordConfirm: ''
    })
    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    useEffect(() => {
        userRef.current?.focus()
    }, []);
    const [signup, { isError, error, isLoading }] = useSignupMutation();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password, name, passwordConfirm } = inputs;
        const data = { email, password, name, passwordConfirm }
        await signup(data).unwrap()
            .then((payload) => {
                router.push(`/auth/verify?email=${email}`)
            })
            .catch((err) => {
                console.log(err?.data?.message);
            });
    }

    return (
        <div>
            <div className='container px-0 max-w-4xl flex place-content-center h-[80%] lg:mt-20 mb-5'>
                <div className='max-w-md'>
                    <div className='lg:border border-gray-300 px-8 items-center text-center rounded-lg lg:bg-white dark:bg-slate-900 dark:border-slate-500'>
                        <Link href="/">
                            <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                                <Image
                                    height={100}
                                    width={100}
                                    draggable={false}
                                    className='w-10 h-10 rounded-xl'
                                    src='/Images/logo-icon.png'
                                    alt=''
                                />
                                <p className='text-2xl font-bold dark:text-white'>Doctris</p>
                            </div>
                        </Link>
                        <p className='text-xl font-semibold text-gray-400 mb-5'>
                            Sign up Book an appointment whith you doctor and chat with him.
                        </p>

                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <input
                                onChange={handleChange}
                                value={inputs.email}
                                ref={userRef}
                                name='email'
                                type='email'
                                className='inputfield'
                                placeholder='Mobile Number Or Email'
                            />
                            <input
                                onChange={handleChange}
                                value={inputs.name}
                                name='name'
                                type='text'
                                className='inputfield'
                                placeholder='First Name'
                            />
                            <input
                                onChange={handleChange}
                                value={inputs.password}
                                name='password'
                                type='password'
                                className='inputfield'
                                placeholder='Password'
                            />
                            <input
                                onChange={handleChange}
                                value={inputs.passwordConfirm}
                                name='passwordConfirm'
                                type='password'
                                className='inputfield'
                                placeholder='Password'
                            />
                            <p className='text-sm font-normal text-gray-500'>
                                People who use our service may have uploaded your contact information to Instagram.
                                <Link href='/more' className='font-semibold text-gray-500'>Learn More</Link>
                            </p>
                            <p className='text-sm font-normal text-gray-500 mt-5'>By signing up, you agree to our Terms ,
                                <Link href='/privacy' className='font-semibold text-gray-500'>
                                    Privacy Policy
                                </Link>
                                and
                                <Link href='/cookies' className='font-semibold text-gray-500'>
                                    Cookies Policy .
                                </Link>
                            </p>
                            <button type='submit' className='btn-primary mt-4 !mb-5' disabled={isLoading}>
                                {isLoading ?
                                    <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                                        <ImSpinner7 />
                                    </span>
                                    :
                                    'Sign Up'
                                }
                            </button>
                            <Link href='/auth/doctor/signup'
                                className='text-blue-800 dark:text-blue-400 focus:text-blue-300 md:mb-4 text-lg font-serif hover:underline'>
                                sign up as a doctor ?
                            </Link>
                            {isError && <GetError error={error} />}
                        </form>

                    </div>
                    <div className='lg:border border-gray-300 justify-center flex md:mt-5 rounded-lg lg:bg-white dark:bg-slate-900 dark:border-slate-500'>
                        <p className="py-5 inline">
                            Don't have an account?{' '}
                            <Link href="/auth/signin" className='font-semibold text-blue-400'>
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
