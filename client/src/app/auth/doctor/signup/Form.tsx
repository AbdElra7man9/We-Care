'use client';
import { useSignupDoctorMutation } from '@Redux/APIs/AuthApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react'
import { toast } from 'react-hot-toast';
import { ImSpinner7 } from 'react-icons/im';
import Select from 'react-select';
import specializations from '@Data/specializations.json'

interface InpupProps {
    email: string;
    password: string;
    name: string;
    passwordConfirm: string;
}

const Form: FC = ({ }) => {
    const router = useRouter();
    const [inputs, setInputs] = useState<InpupProps>({
        email: '',
        password: '',
        name: '',
        passwordConfirm: ''
    });
    const [gender, setGender] = useState<string>('');
    const [specialization, setSpecialization] = useState<string>('');

    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    const GenderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];
    const SpecializationOptions = specializations.map(spec => ({
        value: spec.id,
        label: spec.specialization
    }));
    const [signupDoctor, { isError, error, isLoading }] = useSignupDoctorMutation();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password, name, passwordConfirm } = inputs;
        const data = { email, password, name, specialization, passwordConfirm, gender }
        await signupDoctor(data).unwrap()
            .then(() => {
                router.push(`/auth/verify?email=${email}`)
            })
            .catch((err) => {
                toast.error(err?.data?.message)
            });
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
                onChange={handleChange}
                value={inputs.email}
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
            <div className='flex flex-col gap-3'>
                <Select options={SpecializationOptions} onChange={(data) => setSpecialization(data?.label as string)} placeholder={<div className='flex justify-start'>Select Speciaztion</div>} />
                <Select options={GenderOptions} onChange={(data) => setGender(data?.value as string)} placeholder={<div className='flex justify-start'>Select gender</div>} />
            </div>
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
        </form>

    )
}

export default Form