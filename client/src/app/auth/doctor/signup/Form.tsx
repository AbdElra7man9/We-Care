'use client';
import GetError from '@lib/GetError';
import { useSignupDoctorMutation } from '@Redux/APIs/AuthApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react'
import { ImSpinner7 } from 'react-icons/im';

interface InpupProps {
    email: string;
    specialization: string;
    password: string;
    name: string;
    passwordConfirm: string;
}

const Form: FC = ({ }) => {
    const router = useRouter();
    // const userRef = useRef<HTMLInputElement>(null);
    // useEffect(() => {
    //     if (localStorage.getItem("Logedin ?")) {
    //         navigate("/");
    //     }
    // })
    const [inputs, setInputs] = useState<InpupProps>({
        email: '',
        specialization: '',
        password: '',
        name: '',
        passwordConfirm: ''
    })
    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    // useEffect(() => {
    //     userRef.current?.focus()
    // }, []);
    const [signupDoctor, { isError, error, isLoading }] = useSignupDoctorMutation();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password, specialization, name, passwordConfirm } = inputs;
        const data = { email, password, name, specialization, passwordConfirm }
        await signupDoctor(data).unwrap()
            .then((payload) => {
                router.push(`/auth/verify?email=${email}`)
            })
            .catch((err) => {
                console.log(err?.data?.message);
            });
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
                onChange={handleChange}
                value={inputs.email}
                // ref={userRef}
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
                value={inputs.specialization}
                name='specialization'
                type='text'
                className='inputfield'
                placeholder='Specialization'
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
                <Link href='/more' aria-label='more' className='font-semibold text-gray-500'>Learn More</Link>
            </p>
            <p className='text-sm font-normal text-gray-500 mt-5'>By signing up, you agree to our Terms ,
                <Link href='/privacy' aria-label='privacy' className='font-semibold text-gray-500'>
                    Privacy Policy
                </Link>
                and
                <Link href='/cookies' aria-label='cookies' className='font-semibold text-gray-500'>
                    Cookies Policy .
                </Link>
            </p>
            <button type='submit' aria-label='submit' className='btn-primary mt-4 !mb-5' disabled={isLoading}>
                {isLoading ?
                    <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                        <ImSpinner7 />
                    </span>
                    :
                    'Sign Up'
                }
            </button>
            <Link
                href='/auth/doctor/signup'
                aria-label='sign up for doctor'
                className='text-blue-800 dark:text-blue-400 focus:text-blue-300 md:mb-4 text-lg font-serif hover:underline'>
                sign up as a doctor ?
            </Link>
            {isError && <GetError error={error} />}
        </form>

    )
}

export default Form