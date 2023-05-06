'use client';
import { useSigninUserMutation } from '@Redux/APIs/AuthApi';
import { FC, useRef, useState } from 'react'
import { ImSpinner7 } from 'react-icons/im';
import { useSearchParams } from 'next/navigation';
import { useGetDoctorByIdQuery } from '@Redux/APIs/DoctorApi';
interface FormProps {
    doctorId: string;
}
interface Inputs {
    name: string;
    department: string;
    doctor: string;
    email: string;
    phone: string;
    message: string;
}
const Form: FC<FormProps> = ({ doctorId }) => {
    const userRef = useRef<HTMLInputElement>(null);
    const [inputs, setInputs] = useState<Inputs>({
        name: "",
        department: "",
        doctor: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
    const [signin, { isLoading, isError, error }] = useSigninUserMutation();

    const { data } = useGetDoctorByIdQuery({ doctorId });
    const { doctor } = data || {}
    // useEffect(() => {
    //   userRef.current.focus()
    // }, []);
    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    //   const { email, name, department, doctor, phone, message } = inputs;
    //   const data = { email, name, department, doctor, phone, message };
    //   await signin(data).unwrap()
    //     .then(() => {
    //       setInputs({
    //         name: '',
    //         department: '',
    //         doctor: '',
    //         email: '',
    //         phone: '',
    //         message: '',
    //       });
    //     }).catch(err => {
    //       console.log(err)
    //     })
    // };
    return (
        <form className="flex flex-col"
        // onSubmit={handleSubmit}
        >
            <label className="text-sm text-gray-500 font-medium text-start my-1">
                Patient Name
            </label>
            <input
                type="text"
                ref={userRef}
                onChange={handleChange}
                name="email"
                className="inputfield"
                placeholder="Phone number username,or email"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-1">
                        Department
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        defaultValue={doctor?.specialization}
                        name="department"
                        className="inputfield w-full disabled:list-[none]"
                        disabled
                        placeholder="department"
                    />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-1">
                        Doctor
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        defaultValue={doctor?.name}
                        name="name"
                        className="inputfield w-full"
                        disabled
                        placeholder="Phone number username,or email"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-1">
                        Your Email
                    </label>
                    <input
                        type="date"
                        onChange={handleChange}
                        defaultValue={doctor?.name}
                        name="date"
                        className="inputfield w-full"
                        placeholder="Phone number username,or email"
                    />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-1">
                        Your Phone Number
                    </label>
                    <input
                        type="date"
                        onChange={handleChange}
                        defaultValue={doctor?.name}
                        name="date"
                        className="inputfield w-full"
                        placeholder="Phone number username,or email"
                    />
                </div>
            </div>
            <label className="text-sm text-gray-500 font-medium text-start my-1">
                Message
            </label>
            <textarea
                placeholder="content..."
                cols={60}
                rows={5}
                className="border p-3 outline-none inputfield rounded-lg g-24"
            ></textarea>
            <button aria-label='submit' type='submit' className='btn-primary mt-4' disabled={isLoading}>
                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                    <ImSpinner7 /> </span> : 'Book an appointment'}
            </button>
            {isError && <span className="text-red-500 pb-3 font-poppins font-medium"></span>}
        </form>
    )
}

export default Form