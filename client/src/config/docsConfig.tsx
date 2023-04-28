import { AiFillEye, AiOutlineAlipay } from "react-icons/ai";
import { BsChat, BsChatSquareText, BsChatText, BsGear, BsGrid, BsPeople, BsPersonLinesFill } from "react-icons/bs";
import { GiAlarmClock } from "react-icons/gi";
import { IoCalendarNumberOutline, IoNewspaperOutline } from "react-icons/io5";
import { SlSocialFacebook, SlSocialGithub, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
export interface Company {
    _id: string;
    title: string;
    LinkDir: string;
}

export interface Department {
    _id: string;
    title: string;
    LinkDir: string;
}
export interface MedicalProps {
    Icon: React.ReactNode;
    Title: string;
    Des: string
}
interface DocSideBarProps {
    Icon: React.ReactNode;
    Title: string;
    Href: string;
    // onClose?: () => void;
}
export interface docsConfigProps {
    SocialIcons: React.ReactNode[],
    Services: MedicalProps[],
    SideBar: {
        Doc: DocSideBarProps[],
    }
    Footer: {
        Company: Company[]
        Department: Department[]
    }
}
export const docsConfig: docsConfigProps = {
    SocialIcons: [
        <SlSocialFacebook key={0} size={23} />,
        <SlSocialLinkedin key={1} size={20} />,
        <SlSocialGithub key={2} size={20} />,
        <SlSocialTwitter key={3} size={20} />
    ],
    Services: [
        {
            Icon: <AiFillEye size={25} />,
            Title: ' Eye Care',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },
        {
            Icon: <AiFillEye size={25} />,
            Title: 'Psychotherapy',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },
        {
            Icon: <AiFillEye size={25} />,
            Title: 'Primary Care',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },
        {
            Icon: <AiFillEye size={25} />,
            Title: 'Dental Care',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },
        {
            Icon: <AiFillEye size={25} />,
            Title: 'Orthopedic',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },
        {
            Icon: <AiFillEye size={25} />,
            Title: 'Cardiology',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },
        {
            Icon: <AiFillEye size={25} />,
            Title: 'Gynecology',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },
        {
            Icon: <AiFillEye size={25} />,
            Title: 'Pediatrics',
            Des: 'There is now an abundance of readable dummy texts required purely to fill a space.',
        },

    ],
    SideBar: {
        Doc: [
            {
                Icon: <BsGrid size={17} />,
                Title: 'Dashboard',
                Href: '/doctor/doctor-dashboard'
            },
            {
                Icon: <IoCalendarNumberOutline size={20} />,
                Title: 'Appointment',
                Href: '/doctor/doctor-appointment'
            },
            {
                Icon: <GiAlarmClock size={20} />,
                Title: 'Schedule Timing',
                Href: '/doctor/doctor-schedule'
            },
            {
                Icon: <IoNewspaperOutline size={20} />,
                Title: 'Invoices',
                Href: '/doctor/invoices'
            },
            {
                Icon: <BsChatText size={20} />,
                Title: 'Messages',
                Href: '/doctor/doctor-messages'
            },
            {
                Icon: <BsChatText size={20} />,
                Title: 'Blog',
                Href: '/doctor/doctor-blog'
            },
            {
                Icon: <BsPeople size={20} />,
                Title: 'Patient List',
                Href: '/doctor/patient-list'
            },
            {
                Icon: <BsChatSquareText size={20} />,
                Title: 'Patients Review',
                Href: '/doctor/patient-review'
            },
            {
                Icon: <BsChat size={20} />,
                Title: 'Chat',
                Href: '/doctor/doctor-chat'
            },
            {
                Icon: <AiOutlineAlipay size={20} />,
                Title: 'Payment Information',
                Href: '/doctor/payment'
            },
            {
                Icon: <BsGear size={20} />,
                Title: 'Profile',
                Href: '/doctor/doctor-profile'
            },
            {
                Icon: <BsPersonLinesFill size={20} />,
                Title: 'Profile Settings',
                Href: '/doctor/settings'
            }
        ],
    },

    Footer: {
        Company: [
            {
                _id: '1',
                title: 'About us',
                LinkDir: '/'
            }, {
                _id: '2',
                title: 'Sevices',
                LinkDir: '/'
            }, {
                _id: '3',
                title: 'Team',
                LinkDir: '/'
            }, {
                _id: '4',
                title: 'Project',
                LinkDir: '/'
            }, {
                _id: '5',
                title: 'Blog',
                LinkDir: '/'
            }, {
                _id: '6',
                title: 'Login',
                LinkDir: '/'
            },
        ],
        Department: [
            {
                _id: '1',
                title: 'Eye Care',
                LinkDir: '/'
            }, {
                _id: '2',
                title: 'Psychotherapy',
                LinkDir: '/'
            }, {
                _id: '3',
                title: 'Dental Care',
                LinkDir: '/'
            }, {
                _id: '4',
                title: 'Orthopedic',
                LinkDir: '/'
            }, {
                _id: '5',
                title: 'Cardiology',
                LinkDir: '/'
            }, {
                _id: '6',
                title: 'Gynecology',
                LinkDir: '/'
            }, {
                _id: '7',
                title: 'Neurology',
                LinkDir: '/'
            },
        ]
    },
}