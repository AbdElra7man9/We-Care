'use client'
import { useGetBookedAppointmentsQuery } from '@Redux/APIs/AppointmentsApi'
import { useNewChatMutation } from '@Redux/APIs/ChatApi';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { BsCheck, BsX } from 'react-icons/bs';

interface TableProps {

}

const Table: FC<TableProps> = ({ }) => {
    const router = useRouter();
    const { data } = useGetBookedAppointmentsQuery({ limit: 15, page: 1 });
    const { myBookedAppointments } = data || {};
    const [NewChat] = useNewChatMutation();

    const HandleNewChat = ({ id, username }: { username: string, id: string }) => {
        NewChat({ id }).unwrap()
            .then((payload) => {
                router.push(`/doctor/doctor-messages/${username}/${payload.chatId}`)
            })
    }

    return (
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-800 dark:text-slate-200">
                <tr>
                    <th className="p-4">#</th>
                    <th className="px-6 py-3">Patient</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Comment</th>
                    <th className="px-6 py-3">Date</th>
                    {/* <th className="px-6 py-3">comment</th> */}
                    <th className="px-6 py-3">Action</th>
                </tr>
            </thead>
            {myBookedAppointments?.map((item, index) => (
                <tbody key={item?._id}>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 whitespace-nowrap">
                        <td className="w-4 p-4 font-medium">{index + 1}</td>
                        <th className="flex items-center px-3 pr-10 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item?.patient.profilePicture &&
                                <Image
                                    height={500}
                                    width={500}
                                    className="w-12 h-12 object-cover rounded-full"
                                    src={item?.patient?.profilePicture}
                                    alt=""
                                />
                            }
                            <button onClick={() => { HandleNewChat({ username: item?.patient?.username as string, id: item?.patient?._id as string }) }} className="pl-3">
                                <div className="text-base font-semibold dark:text-gray-200">{item?.patient?.name}</div>
                                <div className="font-normal text-gray-500 dark:text-slate-500">{item?.patient?.email}</div>
                            </button>
                        </th>
                        <td className="px-6 py-4">{item?.status}</td>
                        <td className="px-6 py-4">{item?.type}</td>
                        {/* <td className="px-6 py-4">
                            <button
                                aria-label='gender'
                                className="font-medium text-blue-600 hover:underline">{item?._id}</button>
                        </td> */}
                        <td className="px-6 py-4">
                            <button
                                aria-label='fees'
                                className="font-mediume">{item?.comment || 'no comment'}</button>
                        </td>
                        <td className="px-6 py-4">
                            <button
                                aria-label='createdAt'
                                className="font-medium text-blue-600 hover:underline">{moment(item?.date).fromNow()}
                            </button>
                        </td>
                        <td className="space-x-2">
                            <button
                                aria-label='view patient'
                                className="bg-sky-100 active:bg-sky-200 active:shadow-blue-300 text-sky-400 
                                rounded-full p-2 shadow-blue-200 shadow-md border border-blue-200"><AiOutlineEye size={15} />
                            </button>
                            <button
                                aria-label='approve'
                                className="bg-green-100 active:bg-green-200 active:shadow-green-300 text-green-400
                                 rounded-full p-2 shadow-green-200 shadow-md border border-blue-200"><BsCheck size={15} />
                            </button>
                            <button
                                aria-label='cancel'
                                className="bg-red-100 active:bg-red-200 active:shadow-red-300 text-red-400 
                                rounded-full p-2 shadow-red-200 shadow-md border border-red-200"><BsX size={15} />
                            </button>
                        </td>
                    </tr >
                </tbody >
            ))}
        </table >
    )
}

export default Table