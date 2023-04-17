'use client';
import { useGetAllReviewsQuery, useGetDoctorReviewsQuery } from '@Redux/APIs/ReviewsApi';
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

const Table: FC<TableProps> = ({ }) => {
    const { data } = useGetAllReviewsQuery({ page: 1, limit: 5 });
    const { reviews, status, results } = data || {}
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
                        <th scope="col" className="px-6 py-3">stars</th>
                        <th scope="col" className="px-6 py-3">comments</th>
                        <th scope="col" className="px-6 py-3">doctor</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">action</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews?.map((item, index) => (
                        <>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">{index}</td>
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        height={100}
                                        width={100}
                                        className="w-10 h-10 rounded-full"
                                        src={item.patient?.image.url as string}
                                        alt={item.patient?.name as string} />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">{item.patient?.name}</div>
                                        <div className="font-normal text-gray-500">{item.patient?.email}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    {item.patient?.email}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Bonnie Green</div>
                                        <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    Designer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Jese Leos</div>
                                        <div className="font-normal text-gray-500">jese@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    Vue JS Developer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Thomas Lean</div>
                                        <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    UI/UX Engineer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">Leslie Livingston</div>
                                        <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    SEO Specialist
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table