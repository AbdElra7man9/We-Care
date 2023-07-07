'use client';
import React, { useEffect, useState } from 'react'
import { HiOutlinePaperClip } from 'react-icons/hi'
import { CiPaperplane } from 'react-icons/ci'
import { useGetUserByIdQuery } from '@Redux/APIs/UserApi'
import { useNewMessageMutation } from '@Redux/APIs/MessageApi'
import { BiChevronLeft } from 'react-icons/bi'
import { motion } from 'framer-motion';
import AnimDropdown from '@Animation/AnimDropdown'
import { selectCurrentUser } from '@Redux/Slices/UserSlice'
import Link from 'next/link';
import InfinteScrollableChat from './InfinteScrollableChat';
import Image from 'next/image'
import { useAppSelector } from '@Hooks/useRedux';
import Emoji from '@Components/Layouts/Emoji';
import { userType } from '@lib/types/user';
import { BsCameraReelsFill, BsEmojiSmile, BsFillEmojiSmileFill, BsFillSendFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiAttachment2 } from 'react-icons/ri';
import getSocket from '@lib/SocketConnect';

const Chat = ({ params }: { params: { username: string; chatId: string } }) => {
    const { chatId, username } = params
    const { data, error } = useGetUserByIdQuery({ username });
    const { user } = data || {}
    const [MewMessage, { isLoading }] = useNewMessageMutation() || {};
    const [msg, setMSG] = useState<string>('');
    const socket = getSocket();
    const userInfo = useAppSelector(selectCurrentUser);
    const [isPikerVisiable, setIsPikerVisable] = useState(false);
    // useEffect(() => {
    //     console.log('socket')
    //     socket?.on("MessagetoClient", ({ image, sender, receiver, createdAt, chatId, msg }) => {
    //         console.log('in')
    //         console.log({ image, sender, receiver, createdAt, chatId, msg }
    //         )
    //     })

    // }, [socket])
    const NewMSG = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = { msg }
        MewMessage({ data, chatId }).unwrap()
            .then(({ message }) => {
                setMSG('')
                setIsPikerVisable(false);
                socket?.emit("typing", {
                    receiver: user?._id,
                    sender: userInfo._id,
                    status: false,
                    chatId: chatId
                });
                socket?.emit("Message", {
                    receiver: user?._id,
                    sender: message.sender,
                    msg: message.msg,
                    createdAt: message.createdAt,
                    image: message.image,
                    chatId: message.chatId,
                });
            })
        // .catch(err => console.log(err))
    }

    return (
        <div className='h-full'>
            <div className='fixed md:static top-0 insetx-0 bg-white w-full flex border-b p-2 md:px-6 justify-between h-16'>
                <div className='flex'>
                    <Link
                        href='/'
                        className='block md:hidden'>
                        <BiChevronLeft size={30} />
                    </Link>
                    <Link
                        href={`/${user?.username}`}
                        className='flex gap-2 items-center'>
                        {user?.profilePicture &&
                            <Image
                                height={400}
                                width={400}
                                className="p-1 w-14 h-14 rounded-full object-cover focus:ring-2 focus:ring-gray-300"
                                src={user?.profilePicture}
                                alt=""
                            />
                        }
                        <div className=''>
                            <p className='my-auto'>
                                {user?.name}
                            </p>
                            <div className='flex gap-1 items-end'>
                                <span className='h-2 w-2 bg-green-600 rounded-full'></span>
                                <p className='text-xs text-light mt-1'>Online Now</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex gap-2.5 items-center'>
                    <button className='text-white bg-blue-600 rounded-full flex justify-center items-center p-3'>
                        <BsCameraReelsFill size={13} />
                    </button>
                    <button className='text-white bg-blue-600 rounded-full flex justify-center items-center p-3'>
                        <BsFillTelephoneFill size={13} />
                    </button>
                </div>
            </div>
            <div className='h-full'>
                <>
                    <InfinteScrollableChat
                        userById={user as userType}
                        chatId={chatId}
                        // image={image}
                        isLoading={isLoading}
                    />

                    <form
                        onSubmit={NewMSG}
                        className='fixed md:absolute inset-x-0 bottom-4 flex gap-3 items-center px-5'>
                        <>

                            <input
                                className='outline-none bg-transparent w-full placeholder:text-gray-800 placeholder:text-sm border rounded-md p-2'
                                onChange={(e) => {
                                    setMSG(e.target.value);
                                }}
                                onFocus={() => setIsPikerVisable(false)}
                                onKeyDown={() => socket?.emit("typing",
                                    {
                                        receiver: user?._id,
                                        sender: userInfo._id,
                                        status: true,
                                        chatId: chatId
                                    })}
                                onBlur={() => socket?.emit("typing",
                                    {
                                        receiver: user?._id,
                                        sender: userInfo._id,
                                        status: false,
                                        chatId: chatId
                                    }
                                )}
                                value={msg}
                                autoComplete='off'
                                placeholder='Enter Message'
                            />
                            <div className='flex gap-1.5 items-center'>
                                <div className='text-white bg-blue-600 rounded-md flex justify-center items-center p-2'>
                                    <button type='submit'>
                                        <CiPaperplane size={18} />
                                    </button>
                                </div>
                                <div className='text-2xl relative text-white bg-blue-600 rounded-md flex justify-center items-center p-2'>
                                    <button
                                        type='button'
                                        onClick={() => setIsPikerVisable(!isPikerVisiable)}>
                                        <BsEmojiSmile size={17} />
                                    </button>

                                    {isPikerVisiable &&
                                        <motion.div
                                            variants={AnimDropdown}
                                            initial='initial'
                                            animate='animated'
                                            exit='exit'
                                            className='absolute z-10 bottom-12 -right-5'>
                                            <Emoji
                                                setComment={setMSG}
                                                comment={msg} />
                                        </motion.div>
                                    }
                                </div>
                                <div className='ml-auto text-2xl gap-4 text-white bg-blue-600 rounded-md flex justify-center items-center p-2'>
                                    <label
                                        // onChange={loadFile}
                                        className='cursor-pointer'>
                                        <input type='file' className='hidden' />
                                        <HiOutlinePaperClip size={20} />
                                    </label>
                                </div>
                            </div>
                        </>
                    </form>
                </>
            </div>
        </div>
    )
}
export default Chat