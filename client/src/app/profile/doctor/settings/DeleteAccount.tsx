'use client';
import { useLogOutMutation } from '@Redux/APIs/AuthApi';
import { useDeleteMeMutation } from '@Redux/APIs/UserApi'
import { useRouter } from 'next/navigation';
import { FC } from 'react'
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';

interface DeleteAccountProps {

}

const DeleteAccount: FC<DeleteAccountProps> = ({ }) => {
    const Router = useRouter();
    const [DeleteMe, { isLoading }] = useDeleteMeMutation();
    const [LogOut] = useLogOutMutation();
    const HandleDelete = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        DeleteMe().unwrap()
            .then(() => {
                LogOut().unwrap();
                toast.success('Updated successfully')
                Router.push('/auth/signin')
            })
            .catch((error: any) => {
                toast.error(error.data.message)
            })
    }
    return (
        <form onSubmit={HandleDelete} className='space-y-3 my-5'>
            <h3 className='text-lg font-semibold text-red-500'>Delete Account :</h3>
            <p className='text-gray-400'>
                {`Do you want to delete the account? Please press below "Delete" button`}
            </p>
            <button
                aria-label='save changes'
                className='bg-orange-600 active:bg-orange-700 text-white w-36 font-medium py-2 my-3 
                    rounded-md border border-orange-200 dark:border-none'>
                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                    <ImSpinner9 />
                </span> : 'Save Changes'}
            </button>
        </form>
    )
}

export default DeleteAccount