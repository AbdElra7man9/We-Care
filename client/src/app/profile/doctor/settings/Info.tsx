'use client';
import { useAppSelector } from '@Hooks/useRedux';
import { useUpdateUserInfoMutation } from '@Redux/APIs/UserApi';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import Image from 'next/image';
import { FC, useState } from 'react'
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';

interface InfoProps {

}
interface InputProps {
    email: string;
    name: string;
    specialization: string;
    bio: string;
    username: string;
}
const Info: FC<InfoProps> = ({ }) => {
    const userInfo = useAppSelector(selectCurrentUser)
    const [inputs, setInputs] = useState<InputProps>({
        name: userInfo.name as string,
        email: userInfo.email as string,
        specialization: userInfo.specialization as string,
        username: userInfo.username as string,
        bio: userInfo.bio as string,
    });
    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();
    const HandleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, username, specialization, bio, email } = inputs
        updateUserInfo({ name, username, specialization, bio, email }).unwrap()
            .then(() => {
                toast.success('Updated successfully')
            })
            .catch((error: any) => {
                toast.error(error.data.message)
            })
    }
    return (
        <form onSubmit={HandleUpdate}>
            <div className='py-5 grid grid-cols-1 lg:grid-cols-2'>
                <div className='lg:flex gap-5 mx-auto text-center lg:text-start'>
                    <Image
                        height={500}
                        width={500}
                        className='w-20 h-20 mx-auto rounded-full'
                        src='/Images/Clients/09.jpg'
                        alt=''
                    />
                    <div className='mt-3'>
                        <p className='font-medium text-lg'>Upload your picture</p>
                        <p className='text-gray-500 text-sm'>
                            For best results, use an image at least 256px
                            <br />
                            by 256px in either .jpg or .png format
                        </p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button
                        aria-label='upload'
                        className='bg-blue-600 active:bg-blue-700 text-white font-medium
                        w-full py-2 my-3 rounded-md border border-blue-200 dark:border-none'>
                        Upload
                    </button>
                    <button
                        aria-label='remove'
                        className='bg-sky-100 active:bg-sky-200 active:shadow-blue-300
                        text-sky-400 w-full py-2 my-3 rounded-md 
                        shadow-blue-200 shadow-md border border-blue-200'>
                        Remove
                    </button>
                </div>
            </div>
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
                <div>
                    <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Your Specialztion</label>
                    <input type='text' onChange={handleChange} defaultValue={inputs.specialization} name='specialization' className='inputfield w-full' placeholder='Specialization' />
                </div>
                <div>
                    <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Username</label>
                    <input type='text' onChange={handleChange} defaultValue={inputs.username} name='username' className='inputfield w-full' placeholder='Username' />
                </div>
            </div>
            <div>
                <label className='text-sm text-gray-500 font-medium text-start my-1 block'>Your Bio Here</label>
                <textarea
                    placeholder='content...'
                    cols={60}
                    rows={5}
                    value={inputs.bio}
                    onChange={handleChange}
                    name='bio'
                    className='w-full border p-3 outline-none focus:border-black
                    dark:outline-none dark:bg-slate-800 dark:border-slate-500 dark:focus:border-blue-700 rounded-lg g-24'
                />

            </div>
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

export default Info