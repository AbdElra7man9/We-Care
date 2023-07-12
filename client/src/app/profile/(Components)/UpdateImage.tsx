'use client';
import { FC, useState } from 'react'
import Image from 'next/image';
import { useAppSelector } from '@Hooks/useRedux';
import { selectCurrentToken, selectCurrentUser } from '@Redux/Slices/UserSlice';
import { useUpdateUserInfoMutation } from '@Redux/APIs/UserApi';
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
const url = process.env.NEXT_PUBLIC_API_KEY;

interface UpdateImageProps {

}

const UpdateImage: FC<UpdateImageProps> = ({ }) => {
    const userInfo = useAppSelector(selectCurrentUser);
    const token = useAppSelector(selectCurrentToken);
    const [image, setImage] = useState<File | null>(null);

    const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setImage(file || null);
        if (!image) {
            return toast.error('Select image first')
        }

        try {
            const formData = new FormData();
            formData.append('profilePicture', image);

            const response = await fetch(`${url}/api/v1/users/updateInfo`, {
                method: 'PATCH',
                body: formData,
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                toast.success('Image updated successfully')
            } else {
                toast.error('Error while updating image')

            }
        } catch (error) {
            toast.error('Error while updating image')
        }
        // updateUserInfo({ profilePicture }).unwrap()
        //     .then(() => {
        //         toast.success('Image updated successfully')
        //     })
        //     .catch((error: any) => {
        //         toast.error(error.data.message)
        //     })
    };


    return (
        <div className='py-5 grid grid-cols-1 lg:grid-cols-2'>
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
            <div className='grid grid-cols-2 gap-5 items-center'>
                {/* <form className='py-3 relative'>
                    <label className='relative my-5 flex justify-center items-center cursor-pointer'>
                        <div className='bg-blue-600 active:bg-blue-700 text-white font-medium
                        w-full py-2 my-3 rounded-md border border-blue-200 dark:border-none'>Select image</div>
                        <input type='file' className='hidden' onChange={(e) => { setProfilePicture(e.target.files[0 | null]); HandleUpdate() }} accept='image/*' />
                    </label>
                </form> */}
                <label className='relative my-5 flex justify-center items-center text-center cursor-pointer'>
                    <div
                        aria-label='upload'
                        className='bg-blue-600 active:bg-blue-700 text-white font-medium h-16 flex justify-center items-center
                        w-full py-2 my-3 rounded-md border border-blue-200 dark:border-none'>
                        {isLoading ? <ImSpinner9 /> : 'Upload'}
                    </div>
                    <input type='file' className='hidden' onChange={handleFileChange} accept='image/*' />
                </label>
                <button
                    aria-label='remove'
                    className='bg-sky-100 active:bg-sky-200 active:shadow-blue-300 h-16
                        text-sky-400 w-full py-2 my-3 rounded-md 
                        shadow-blue-200 shadow-md border border-blue-200'>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default UpdateImage