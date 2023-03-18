import React from 'react'
import { BsChat, BsChatSquareText, BsChatText, BsGear, BsGrid, BsPeople, BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineAlipay } from 'react-icons/ai'
import { IoCalendarNumberOutline, IoNewspaperOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { GiAlarmClock } from 'react-icons/gi';

const AdminSidebar = ({ sideWidth }) => {
    const { pathname } = useLocation();
    const LinkList = ({ Icon, Title, Href, onClose }) => {
        return (
            <div className={`text-lg font-medium px-5 w-full ${(pathname === Href) ? '!text-blue-600' : ' text-gray-600'}`}>
                <Link to={Href}>
                    <div className='flex gap-4 py-2 items-center hover:text-blue-600 group-hover:text-blue-600'>
                        <div className={`bg-gray-100 w-10 h-10 flex justify-center items-center rounded-lg group ${(pathname === Href) ?
                            'text-blue-600 bg-blue-200' : 'text-gray-600 hover:text-blue-500'}`}>{Icon}</div>
                        <p className='text-lg'>{Title}</p>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div
            className='fixed top-0 left-0 z-10 border-r overflow-hidden duration-300 h-full'
            style={{ width: `${sideWidth}` }}>
            <div className="p-5">
                <Link to='/' className='flex gap-3'>
                    <img className='w-10 h-10 rounded-xl'
                        src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                    <p className={`text-2xl font-bold text-black`}>Doctris</p>
                </Link>
            </div>
            <div className='whitespace-nowrap py-3 space-y-2'>
                <LinkList Icon={<BsGrid size={17} />} Title='Dashboard' Href='/admin/admin-dashboard' />
                <LinkList Icon={<IoCalendarNumberOutline size={20} />} Title='Appointment ' Href='/admin/admin-appointment' />
                <LinkList Icon={<GiAlarmClock size={20} />} Title='Schedule Timing' Href='/admin/admin-schedule' />
                <LinkList Icon={<IoNewspaperOutline size={20} />} Title='Invoices' Href='/admin/invoices' />
                <LinkList Icon={<BsChatText size={20} />} Title='Messages' Href='/admin/admin-messages' />
                <LinkList Icon={<BsPeople size={20} />} Title='Patient List' Href='/admin/patient-list' />
                <LinkList Icon={<BsChatSquareText size={20} />} Title='Patients Review' Href='/admin/patient-review' />
                <LinkList Icon={<BsChat size={20} />} Title='Chat' Href='/admin/admin-chat' />
                <LinkList Icon={<AiOutlineAlipay size={20} />} Title='Payment Information' Href='/admin/payment' />
                <LinkList Icon={<BsGear size={20} />} Title='Profile' Href='/admin/admin-profile' />
                <LinkList Icon={<BsPersonLinesFill size={20} />} Title='Profile Settings' Href='/admin/settings' />
            </div>
        </div>

    )
}

export default AdminSidebar
