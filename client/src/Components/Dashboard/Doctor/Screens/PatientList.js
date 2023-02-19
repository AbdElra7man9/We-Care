import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
const PatientList = () => {

    return (
        <div className='container px-5 max-w-full'>
            <p className='text-lg font-semibold py-5'>Recent Treatment</p>
            <div className='w-full space-y-2'>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex items-center justify-between p-4 bg-white">
                        <div>
                            <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                                <span className="sr-only">Action button</span>
                                Action
                                <BiChevronDown size={18} />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BsSearch />
                            </div>
                            <input type="text" className="block outline-none p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for users" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th className="p-4"><div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                                </th>
                                <th className="px-6 py-3">Basic Info</th>
                                <th className="px-6 py-3">Phone Number</th>
                                <th className="px-6 py-3">City</th>
                                <th className="px-6 py-3">Next Appointment</th>
                                <th className="px-6 py-3">Last Appointment</th>
                                <th className="px-6 py-3">Register date</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="bg-white hover:bg-gray-50">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://res.cloudinary.com/abdo9/image/upload/v1676229443/Instegram/User/gjqfae4jmyctjvkavwhy.png"
                                        alt="" />
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
                                    <button type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 hover:underline">Edit user</button>
                                </td>
                                <td className="px-6 py-4">
                                    <button type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 hover:underline">Edit user</button>
                                </td>
                                <td className="px-6 py-4">
                                    <button type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 hover:underline">Edit user</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PatientList
