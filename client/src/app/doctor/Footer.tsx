import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <div className='container max-w-full py-4 bg-[#202942] px-5 mt-5'>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between space-y-2 text-center'>
                <p className='text-xs font-medium text-white'>2023 © We Care. Design with  by AbdElrahman Shaban.</p>
                <div className='flex gap-3 items-center text-sm font-medium text-gray-300'>
                    <Link href='/terms'>Terms</Link>
                    <Link href='/terms'>Privacy</Link>
                    <Link href='/terms'>About</Link>
                    <Link href='/terms'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer