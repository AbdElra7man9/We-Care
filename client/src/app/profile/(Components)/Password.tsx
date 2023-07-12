'use client';
import { useChangePasswordMutation } from '@Redux/APIs/AuthApi';
import { FC, useState } from 'react'
import { toast } from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';

interface PasswordProps {

}

const Password: FC<PasswordProps> = ({ }) => {
    const [inputs, setInputs] = useState({
        passwordCurrent: '',
        password: '',
        passwordConfirm: ''
    });
    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    const [ChangePassword, { isLoading }] = useChangePasswordMutation();
    const HandleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { passwordCurrent, password, passwordConfirm } = inputs
        ChangePassword({ passwordCurrent, password, passwordConfirm }).unwrap()
            .then(() => {
                toast.success('Updated successfully')
            })
            .catch((error: any) => {
                toast.error(error.data.message)
            })
    }
    return (
        <form onSubmit={HandleUpdate}>
            <div>
                <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Old password :</label>
                <input type='password' onChange={handleChange} name='passwordCurrent' className='inputfield w-full' placeholder='Old password' />
            </div>
            <div>
                <label className='text-sm text-gray-500 font-medium text-start my-1.5'>New password :</label>
                <input type='password' onChange={handleChange} name='password' className='inputfield w-full' placeholder='New password' />
            </div>
            <div>
                <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Re-type New password :</label>
                <input type='password' onChange={handleChange} name='passwordConfirm' className='inputfield w-full' placeholder='Re-type New password' />
            </div>
            <button
                aria-label='submit'
                className='bg-blue-600 h-12 active:bg-blue-700 text-white
                w-36 font-medium py-2 my-3 rounded-md border border-blue-200 dark:border-none'>
                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                    <ImSpinner9 />
                </span> : 'Save Changes'}
                
            </button>
        </form>
    );
}

export default Password