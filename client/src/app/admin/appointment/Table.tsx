'use client';
import Image from 'next/image';
import { FC } from 'react'
import { BsSearch } from 'react-icons/bs';

interface TableProps {

}

interface AppontementProps {
    doctor: {
        name: string;
    },
    pateint: {
        name: string;
    }
}
const Appointements: AppontementProps[] = [
    {
        doctor: {
            name: 'Ahmed'
        },
        pateint: {
            name: 'hi'
        }
    }
]
const Table: FC<TableProps> = ({ }) => {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="relative flex justify-end my-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BsSearch />
                </div>
                <input
                    type="text"
                    className="p-2 pl-10 text-sm text-gray-900 border border-blue-300 rounded-lg w-80 bg-gray-50 
                  focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-900 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for users"
                />
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">#</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Age</th>
                        <th scope="col" className="px-6 py-3">Gender</th>
                        <th scope="col" className="px-6 py-3">Department</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Time</th>
                        <th scope="col" className="px-6 py-3">Doctor</th>
                        <th scope="col" className="px-6 py-3">Fees</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {Appointements?.map((item, index) => (
                        <tr key={item._id} className="bg-white border-b dark:bg-slate-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 whitespace-nowrap">
                            <td className="w-4 p-4">{index}</td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 dark:text-white">
                                <Image
                                    height={100}
                                    width={100}
                                    className="w-10 h-10 rounded-full"
                                    src={item.patient?.image?.url ?? process.env.NEXT_PUBLIC_ICON as string}
                                    alt={item.patient?.name ?? ' ' as string} />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{item.patient?.name}</div>
                                    <div className="font-normal text-gray-500">{item.patient?.email}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                {item.patient?.email}
                            </td>
                            <td className="px-6 py-4">
                                <Rating rating={item.rating as number} />
                            </td>
                            <td className="px-6 py-4">
                                <p className='ellipse-2'>{item.comment}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p>{item.doctor?.name}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p>{moment(item.createdAt).fromNow()}</p>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    type='button'
                                    aria-label='Delete Review'
                                    onClick={() => DeleteReviewHandler(item._id as string)}
                                    className='bg-orange-100 text-orange-400 px-7 py-1 rounded-md shadow-orange-200 shadow-md border border-orange-200
                                        duration-200 active:bg-orange-200 active:scale-95'>
                                    <span className='w-full flex justify-center items-center gap-2'>
                                        <MdDelete size={22} />
                                        <p className='font-semibold'>Delete</p>
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>

    )
}

export default Table