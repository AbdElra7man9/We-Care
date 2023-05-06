'use client';
import React, { useEffect, useState } from 'react'
import { FaRegSmile } from 'react-icons/fa'
import { IoImageOutline } from 'react-icons/io5'
import { useGetUserByIdQuery } from '@Redux/APIs/UserApi'
import { useNewMessageMutation } from '@Redux/APIs/MessageApi'
import { BiChevronLeft } from 'react-icons/bi'
import { motion } from 'framer-motion';
import AnimDropdown from '@Animation/AnimDropdown'
import { selectCurrentUser } from '@Redux/Slices/UserSlice'
import useSocket from '@Hooks/useSocket';
import Link from 'next/link';
import InfinteScrollableChat from './InfinteScrollableChat';
import Image from 'next/image'
import { useAppSelector } from '@Hooks/useRedux';
import Emoji from '@Components/Layouts/Emoji';

export default function page({ params, searchParams }: any) {
    const { chatId, username } = params
    const { data: userById, error } = useGetUserByIdQuery(username) || {};
    const [MewMessage, { isLoading }] = useNewMessageMutation() || {};
    const [msg, setMSG] = useState('');
    const { socket } = useSocket();
    const userInfo = useAppSelector(selectCurrentUser);
    const [isPikerVisiable, setIsPikerVisable] = useState(false);

    const NewMSG = (e: React.FormEvent<HTMLFormElement>) => {
        MewMessage({ msg, chatId }).unwrap()
            .then(({ message }) => {
                setMSG('')
                setIsPikerVisable(false);
                socket?.emit("typing", {
                    receiver: userById._id,
                    sender: userInfo._id,
                    status: false,
                    chatId: chatId
                });
                socket?.emit("Message", {
                    sender: message.sender,
                    msg: message.msg,
                    createdAt: message.createdAt,
                    image: message.image,
                    chatId: message.chatId,
                    receiver: userById?._id
                });
            })
        // .catch(err => console.log(err))
    }

    return (
        <div className='h-full'>
            <div className='fixed md:static top-0 insetx-0 bg-white w-full flex border-b p-2 md:px-6 justify-between h-12'>
                <div className='flex'>
                    <Link
                        href='/'
                        className='block md:hidden'>
                        <BiChevronLeft size={30} />
                    </Link>
                    <Link
                        href={`/${userById?.username}`}
                        className='flex gap-2 items-center'>
                        <Image
                            height={400}
                            width={400}
                            className="p-1 w-10 h-10 rounded-full object-cover focus:ring-2 focus:ring-gray-300"
                            src={userById?.avatar?.url}
                            alt=""
                        />
                        <div className=''>
                            <p className='my-auto'>
                                {userById?.username}
                            </p>
                        </div>
                    </Link>
                </div>

            </div>
            <div className='h-full'>
                <>
                    <InfinteScrollableChat
                        userById={userById}
                        chatId={chatId}
                        // image={image}
                        isLoading={isLoading}
                    />

                    <form
                        onSubmit={NewMSG}
                        className='fixed md:absolute inset-x-0 bottom-4 mx-2 border
                            bg-white rounded-full w-[97%] mb-2 py-3 md:by-5 px-6 flex items-center mt-auto '
                    >

                        <>
                            <div className='text-2xl relative'>
                                <button
                                    type='button'
                                    onClick={() => setIsPikerVisable(!isPikerVisiable)}>
                                    <FaRegSmile />
                                </button>

                                {isPikerVisiable &&
                                    <motion.div
                                        variants={AnimDropdown}
                                        initial='initial'
                                        animate='animated'
                                        exit='exit'
                                        className='absolute z-10 bottom-12 -left-5'>
                                        <Emoji
                                            setComment={setMSG}
                                            comment={msg} />
                                    </motion.div>
                                }
                            </div>
                            <input
                                className='outline-none bg-transparent w-full mx-4'
                                onChange={(e) => {
                                    setMSG(e.target.value);
                                }}
                                onFocus={() => setIsPikerVisable(false)}
                                onKeyDown={() => socket?.emit("typing",
                                    {
                                        receiver: userById._id,
                                        sender: userInfo._id,
                                        status: true,
                                        chatId: chatId
                                    })}
                                onBlur={() => socket?.emit("typing",
                                    {
                                        receiver: userById._id,
                                        sender: userInfo._id,
                                        status: false,
                                        chatId: chatId
                                    }
                                )}
                                value={msg}
                                autoComplete='off'
                                placeholder='Message ...' />
                            {msg ?
                                <button type='submit' className='text-blue-500 font-semibold'>Send</button>
                                :
                                <div className='ml-auto flex text-2xl gap-4'>
                                    <label
                                        // onChange={loadFile}
                                        className='cursor-pointer'>
                                        <input type='file' className='hidden' />
                                        <IoImageOutline />
                                    </label>
                                </div>
                            }
                        </>
                    </form>
                </>
            </div>
        </div>
    )
}