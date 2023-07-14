'use client';
import { useAppSelector } from '@Hooks/useRedux';
import { useUpdateUserInfoMutation } from '@Redux/APIs/UserApi';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import { useSession } from 'next-auth/react';
import { FC, useState } from 'react'
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import Select from 'react-select';
import specializations from '@Data/specializations.json'

interface InfoProps {

}
interface InputProps {
    email: string;
    name: string;
    bio: string;
    username: string;
    summery: string;
}
const UpdateInfo: FC<InfoProps> = ({ }) => {
    const userInfo = useAppSelector(selectCurrentUser)
    const [inputs, setInputs] = useState<InputProps>({
        name: userInfo.name as string,
        email: userInfo.email as string,
        username: userInfo.username as string,
        bio: userInfo.bio as string,
        summery: userInfo.summery as string,
    });
    const [specialization, setSpecialization] = useState<string>(userInfo.specialization as string);
    const [gender, setGender] = useState<string>('');

    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    const { data: session } = useSession();
    const isDoctor = session?.role === 'Doctor'
    const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

    const SpecializationOptions = specializations.map(spec => ({
        value: spec.id,
        label: spec.specialization
    }));
    const GenderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];
    const HandleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, username, bio, summery, email } = inputs
        updateUserInfo({ name, username, specialization, gender, summery, bio, email }).unwrap()
            .then(() => {
                toast.success('Updated successfully')
            })
            .catch((error: any) => {
                toast.error(error.data.message)
            })
    }
    return (
        <form onSubmit={HandleUpdate}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Your Name</label>
                    <input type='text' onChange={handleChange} defaultValue={inputs.name} name='name' className='inputfield w-full' placeholder='Name' />
                </div>
                <div>
                    <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Your email</label>
                    <input type='email' onChange={handleChange} defaultValue={inputs.email} name='email' className='inputfield w-full' placeholder='Email' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {isDoctor ?

                    <div>
                        <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Username</label>
                        <Select options={SpecializationOptions} onChange={(data) => setSpecialization(data?.label as string)} placeholder={<div className='flex justify-start'>Select Speciaztion</div>} />
                    </div>
                    :
                    <div>
                        <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Username</label>
                        <Select options={GenderOptions} onChange={(data) => setGender(data?.value as string)} placeholder={<div className='flex justify-start'>Select gender</div>} />
                    </div>
                }
                <div>
                    <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Username</label>
                    <input type='text' onChange={handleChange} defaultValue={inputs.username} name='username' className='inputfield w-full' placeholder='Username' />
                </div>
            </div>
            {isDoctor &&
                <div>

                </div>
            }
            <div>
                <label className='text-sm text-gray-500 font-medium text-start my-1 block'>Your Bio Here</label>
                <textarea
                    placeholder='content...'
                    cols={60}
                    rows={4}
                    value={inputs.bio}
                    onChange={handleChange}
                    name='bio'
                    className='w-full border p-3 outline-none focus:border-black
                    dark:outline-none dark:bg-slate-800 dark:border-slate-500 dark:focus:border-blue-700 rounded-lg g-24'
                />

            </div>
            {isDoctor &&
                <div>
                    <label className='text-sm text-gray-500 font-medium text-start my-1 block'>summery</label>
                    <textarea
                        placeholder='content...'
                        cols={60}
                        rows={7}
                        value={inputs.summery}
                        onChange={handleChange}
                        name='bio'
                        className='w-full border p-3 outline-none focus:border-black
                    dark:outline-none dark:bg-slate-800 dark:border-slate-500 dark:focus:border-blue-700 rounded-lg g-24'
                    />

                </div>
            }
            <button
                aria-label='save changes'
                className='bg-blue-600 h-12 active:bg-blue-700 text-white w-36 
                font-medium py-2 my-3 rounded-md border border-blue-200 dark:border-none'>
                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                    <ImSpinner9 />
                </span> : 'Save Changes'}
            </button>
        </form >
    );
}

export default UpdateInfo