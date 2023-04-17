import React from 'react'
import { BsChat, BsChatSquareText, BsChatText, BsGear, BsGrid, BsPeople, BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineAlipay } from 'react-icons/ai'
import { IoCalendarNumberOutline, IoNewspaperOutline } from 'react-icons/io5'
import { GiAlarmClock } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface LinkListProps {
    Icon: React.ReactNode;
    Title: string;
    Href: string;
    onClose?: () => void;
}
interface WidthProps {
    sideWidth: string;
}
const AdminSidebar: React.FC<WidthProps> = ({ sideWidth }) => {
    const pathname = usePathname();
    const LinkList: React.FC<LinkListProps> = ({ Icon, Title, Href, onClose }) => {
        return (
            <div className={`text-lg font-medium px-7 w-full ${(pathname === Href) ? '!text-blue-600' : ' text-gray-600'}`}>
                <Link href={Href}>
                    <div className='flex gap-4 py-2 items-center hover:text-blue-600 group-hover:text-blue-600'>
                        <div className={`bg-gray-100 w-10 h-10 flex justify-center items-center rounded-lg group ${(pathname === Href) ?
                            'text-blue-600 bg-blue-200' :
                            'text-gray-600 hover:text-blue-500'}`}>
                            {Icon}
                        </div>
                        <p className='text-black font-light dark:text-slate-200'>{Title}</p>
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
                <Link href='/' className='flex gap-3'>
                    <Image height={100} width={100} className='w-10 h-10 rounded-xl'
                        src='/Images/logo-icon.png' alt='' />
                    <p className={`text-2xl font-bold text-black  dark:text-white`}>Doctris</p>
                </Link>
            </div>
            <div className='whitespace-nowrap py-3 space-y-2'>
                <LinkList Icon={<BsGrid size={17} />} Title='Dashboard' Href='/admin/admin-dashboard' />
                <LinkList Icon={<IoCalendarNumberOutline size={20} />} Title='Appointment ' Href='/admin/appointment' />
                <LinkList Icon={<GiAlarmClock size={20} />} Title='Doctors' Href='/admin/doctors-list' />
                <LinkList Icon={<IoNewspaperOutline size={20} />} Title='Invoices' Href='/admin/invoices' />
                <LinkList Icon={<BsChatText size={20} />} Title='Blogs' Href='/admin/blogs' />
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
