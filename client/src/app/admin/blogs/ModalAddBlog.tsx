'use client';
import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import AnimModal from '@Animation/AnimModal';
import { BsX } from 'react-icons/bs';
import { useAppDispatch } from '@Hooks/useRedux';
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import { ImSpinner7 } from 'react-icons/im';
import GetError from '@lib/GetError';
import { useCreateBlogMutation } from '@Redux/APIs/BlogApi';
import Image from 'next/image';
interface ModalAddBlogProps {

}
interface Inputs {
    title: string;
    des: string;
}
const ModalAddBlog: FC<ModalAddBlogProps> = ({ }) => {
    const [inputs, setInputs] = useState<Inputs>({
        title: "",
        des: "",
    });
    const [image, setImage] = useState<string>('')
    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result as string);
            };
        }
    };


    const [createBlog, { isLoading, isError, error }] = useCreateBlogMutation();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { title, des } = inputs;
        const data = { title, image, des };
        createBlog(data).unwrap()
            .then(() => {
                dispatch(FeatureAction.setModalAddBlog(false));
            })
    };

    const dispatch = useAppDispatch()
    return (
        <>
            <div className='fixed inset-0 bg-black/30 z-10'
                onClick={() => dispatch(FeatureAction.setModalAddBlog(false))}
            >
            </div>
            <motion.div
                variants={AnimModal}
                initial='initial'
                animate='animate'
                exit='exit'
                className='fixed inset-x-0 z-20 container lg:h-[45rem] max-w-xs sm:max-w-lg lg:max-w-5xl duration-300 rounded-lg bg-white'
            >
                <div className='flex justify-between items-center p-5 py-2'>
                    <p>Add Blog</p>
                    <button
                        aria-label='Cancel add blog'
                        className='h-10 w-10 bg-gray-100 flex justify-center items-center rounded-md active:bg-gray-200 active:scale-95'
                        onClick={() => dispatch(FeatureAction.setModalAddBlog(false))}
                    >
                        <BsX />
                    </button>
                </div><hr />
                <div className='p-5 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className='col-span-1'>
                        <p className='text-gray-400 text-sm mb-5'>{`Upload your blog image here, Please click "Upload Image" Button.`}</p>
                        {image &&
                            <Image
                                height={500}
                                width={500}
                                draggable={false}
                                src={image}
                                alt="Uploaded image"
                                className='h-96 w-full object-cover py-4 rounded-xl'
                            />
                        }
                        <label>
                            <input onChange={handleFileChange} id="dropzone-file" type="file" className="hidden" />
                            <div
                                onClick={() => dispatch(FeatureAction.setModalAddBlog(true))}
                                className='bg-blue-700 text-white font-semibold rounded-md text-center p-3 px-5'>
                                Upload Image
                            </div>
                        </label>
                    </div>
                    <div className='col-span-2'>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <label className="text-sm text-gray-500 font-medium text-start my-1">
                                Blog title
                            </label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="title"
                                className="inputfield"
                                placeholder="Phone number username,or email"
                            />

                            <label className="text-sm text-gray-500 font-medium text-start my-1">
                                Discription
                            </label>
                            <textarea
                                placeholder="content..."
                                onChange={handleChange}
                                name='des'
                                cols={60}
                                rows={5}
                                className="border p-3 outline-none inputfield rounded-lg g-24"
                            />
                            <button
                                aria-label='add new blog'
                                type='submit'
                                className='btn-primary mt-4'
                                disabled={isLoading}>
                                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                                    <ImSpinner7 />
                                </span> : 'Create Blog'}
                            </button>
                            {isError && <GetError error={error} />}
                        </form>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ModalAddBlog