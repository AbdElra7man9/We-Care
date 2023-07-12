'use client';
import { FC, useState } from 'react'
import Image from 'next/image';
import { useAppSelector } from '@Hooks/useRedux';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import { useUpdateUserInfoMutation } from '@Redux/APIs/UserApi';
import { toast } from 'react-hot-toast';

interface UpdateImageProps {

}

const UpdateImage: FC<UpdateImageProps> = ({ }) => {
    const userInfo = useAppSelector(selectCurrentUser)
    const [profilePicture, setProfilePicture] = useState<string>('');

    const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

    const HandleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateUserInfo({ profilePicture }).unwrap()
            .then(() => {
                toast.success('Image updated successfully')
            })
            .catch((error: any) => {
                toast.error(error.data.message)
            })
    }
    return (
        <form className='py-5 grid grid-cols-1 lg:grid-cols-2'>
            <div className='lg:flex gap-5 mx-auto text-center lg:text-start'>
                {userInfo?.profilePicture &&
                    <Image
                        height={500}
                        width={500}
                        className='w-20 h-20 mx-auto object-cover rounded-full'
                        src={userInfo?.profilePicture}
                        alt=''
                    />
                }
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
        </form>
    )
}

export default UpdateImage