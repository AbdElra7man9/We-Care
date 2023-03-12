import React from 'react'
import { BsSearch, BsCheck, BsX } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Pagination } from '../../../Exports';

const Appointments = () => {
    const PatientList = [
        {
            _id: '1',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '2',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '3',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '4',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '5',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '6',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        }, {
            _id: '7',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '8',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '9',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
        {
            _id: '10',
            img: 'https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg',
            name: 'Howard Tanner',
            age: '29',
            email: 'abdo@gmail.com',
            phone: '+201015076447',
            gender: 'Male',
            createdAt: '20th Dec 2020',
            fees: '50'
        },
    ]
    return (
        <div className='container px-5 max-w-full'>
            <p className='text-lg font-semibold py-5'>Appointment</p>
            <div className='w-full space-y-2'>

                    <div className="flex items-center justify-between p-4 bg-white">
                        {/* <div>
                            <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                                <span className="sr-only">Action button</span>
                                Action
                                <BiChevronDown size={18} />
                            </button>
                        </div> */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <BsSearch />
                            </div>
                            <input type="text" className="block outline-none p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for users" />
                        </div>
                    </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th className="p-4">#</th>
                                <th className="px-6 py-3">basic info</th>
                                <th className="px-6 py-3">Phone Number</th>
                                <th className="px-6 py-3">Age</th>
                                <th className="px-6 py-3">Gender</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Fees</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        {PatientList?.map((item, index) => (
                            <tbody key={item?._id}>
                                <tr className="bg-white hover:bg-gray-50 whitespace-nowrap">
                                    <td className="w-4 p-4 font-medium">{index + 1}</td>
                                    <th className="flex items-center px-3 pr-10 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <img className="w-12 h-12 rounded-full"
                                            src={item?.img}
                                            alt="" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">{item?.name}</div>
                                            <div className="font-normal text-gray-500">{item?.email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">{item?.phone}</td>
                                    <td className="px-6 py-4">{item?.age}</td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 hover:underline">{item?.gender}</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 hover:underline">{item?.createdAt}</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 hover:underline">{item?.fees}</button>
                                    </td>
                                    <td className="space-x-2">
                                        <button className="bg-sky-100 active:bg-sky-200 active:shadow-blue-300 text-sky-400 rounded-full p-2 shadow-blue-200 shadow-md border border-blue-200"><AiOutlineEye size={15} /></button>
                                        <button className="bg-green-100 active:bg-green-200 active:shadow-green-300 text-green-400 rounded-full p-2 shadow-green-200 shadow-md border border-blue-200"><BsCheck size={15} /></button>
                                        <button className="bg-red-100 active:bg-red-200 active:shadow-red-300 text-red-400 rounded-full p-2 shadow-red-200 shadow-md border border-red-200"><BsX size={15} /></button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                {/* <Pagination /> */}
            </div>
        </div>
    )
}

export default Appointments
