'use client';
import Rating from '@Components/Parts/Rating';
import { useDeleteReviewMutation } from '@Redux/APIs/CoordinatorApi';
import { useGetDoctorLoggedReviewsQuery } from '@Redux/APIs/ReviewsApi';
import moment from 'moment';
import Image from 'next/image';
import { FC } from 'react'
import { BsSearch } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

interface TableProps {

}
const Table: FC<TableProps> = ({ }) => {
    const { data } = useGetDoctorLoggedReviewsQuery({ page: 1, limit: 5 });
    const { reviews, status, results } = data || {};
    const [DeleteReview] = useDeleteReviewMutation();
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-800 my-5">
            {(!reviews || reviews.length === 0) ?
                <div className='flex  justify-center items-center h-96 w-full'>
                    <p className='text-black dark:text-slate-100'>No reviews yet</p>
                </div>
                :
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 whitespace-nowrap">
                        <tr>
                            <th scope="col" className="p-4">#</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">stars</th>
                            <th scope="col" className="px-6 py-3">comments</th>
                            <th scope="col" className="px-6 py-3">doctor</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews?.map((item, index) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>

    )
}

export default Table