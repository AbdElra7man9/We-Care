import React, { useEffect, useRef, useState } from 'react'
import { BsEmojiSmile, BsMicFill } from 'react-icons/bs'
import { RiAttachment2 } from 'react-icons/ri'
import { useParams } from 'react-router-dom';
import { useGetMessagesQuery, useNewMessageMutation } from '../../../../../Redux/APIs/MessageApi'
import { useGetUserByIdQuery } from '../../../../../Redux/APIs/UserApi'
import { useSocket, Message, Emoji } from '../../../../Exports';
import { IoMdPaperPlane } from 'react-icons/io'
import { motion } from 'framer-motion';
import AnimDropdown from './../../../../../Animation/AnimDropdown';
const Conversation = () => {
    const { username, id } = useParams();
    const { data: userById } = useGetUserByIdQuery(username) || {};
    const { data: FollowerMessages } = useGetMessagesQuery(id) || {};
    const [recievedmsg, setRecieved] = useState({});
    const [allMSGs, setAllMSGs] = useState([]);
    const [MewMessage] = useNewMessageMutation() || {};
    const [msg, setMSG] = useState('');
    const [isPikerVisiable, setIsPikerVisable] = useState(false);
    const ScrollRef = useRef();
    const { socket } = useSocket();
    useEffect(() => {
        ScrollRef.current?.scrollIntoView({ behavior: 'smooth' })
        ScrollRef.current?.focus();
    }, [allMSGs]);
    useEffect(() => {
        setAllMSGs(FollowerMessages);
        socket?.on('MessagetoClient', ({ sender, receiver, createdAt, msg }) => {
            console.log({ sender, receiver, createdAt, msg });
            setRecieved({
                sender, receiver, createdAt, msg
            });
        })
        // eslint-disable-next-line 
    }, [socket, FollowerMessages]);

    useEffect(() => {
        recievedmsg &&
            setAllMSGs([...allMSGs, recievedmsg]);
        // eslint-disable-next-line 
    }, [recievedmsg, setAllMSGs]);

    const NewMSG = (e) => {
        e.preventDefault();
        const data = { msg }
        MewMessage({ data, id }).unwrap()
            .then(payload => {
                setAllMSGs([...allMSGs, payload]);
                socket.emit("Message", {
                    sender: payload.sender,
                    msg: payload.msg,
                    createdAt: payload.createdAt,
                    receiver: userById?._id
                });
                setMSG('')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='pt-3 overflow-y-scroll hideScroll w-full h-full'>
                <div>
                    <div className='mb-24'>
                        {allMSGs?.map((message, index) => (
                            <div ref={ScrollRef} key={index}>
                                <Message message={message} Patient={message?.sender === userById?._id} />
                            </div>
                        ))}
                    </div>
                    <form onSubmit={NewMSG} className='mb-3 py-5 px-6 flex items-center w-full gap-5 mt-auto absolute bottom-0'>
                        <>
                            <div className='relative w-full'>
                                <input className='outline-none border rounded-full py-5 w-full px-12 placeholder:font-semibold'
                                    onChange={(e) => setMSG(e.target.value)}
                                    onFocus={() => setIsPikerVisable(false)}
                                    value={msg}
                                    autoComplete='off'
                                    placeholder='Message ...'
                                />

                                <button
                                    type='button'
                                    onClick={() => setIsPikerVisable(!isPikerVisiable)}
                                    className='px-4 text-gray-500 absolute inset-y-0 flex items-center left-0 text-2xl'>
                                    <BsEmojiSmile />
                                </button>
                                {isPikerVisiable &&
                                    <motion.div
                                        variants={AnimDropdown}
                                        initial='initial'
                                        animate='animated'
                                        exit='exit'
                                        className='absolute z-10 bottom-[4.5rem]'>
                                        <Emoji
                                            setContent={setMSG}
                                            content={msg} />
                                    </motion.div>
                                }
                                <button className='px-4 text-gray-500 absolute inset-y-0 flex items-center right-0 text-2xl'><RiAttachment2 /></button>
                            </div>
                            {msg ?
                                <button className='text-white text-2xl bg-blue-500 rounded-full flex items-center cursor-pointer justify-center p-4'>
                                    <IoMdPaperPlane />
                                </button>
                                :
                                <button className='text-white text-2xl bg-blue-500 rounded-full flex items-center justify-center p-4'>
                                    <BsMicFill />
                                </button>
                            }
                        </>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Conversation
