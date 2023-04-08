'use client';
import useBreakpoint from '@Hooks/useBreakpoint';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react'

interface handleGridViewProps {

}

const HandleGridView = ({ children }: { children: React.ReactNode }) => {
    const SearchQuery = useSearchParams();
    const chatId = SearchQuery.get('chatId')
    const { breakpoint, MobileView } = useBreakpoint();
    const xl = (breakpoint === 'xl')
    const mobile = MobileView || xl
    return (
        <div className='grid grid-cols-4 gap-5 h-[85vh]'>
            {(!chatId || !mobile) &&
                <div
                    className='sm:shadow-[.2px_.2px_3px_1px] sm:shadow-gray-200 overflow-hidden 
            rounded-xl col-span-4 lg:col-span-4 xxl:col-span-1 h-screen md:h-[90vh]'
                >
                    {/* <PatientMessageCard /> */}
                </div>}
            {(chatId || !mobile) &&
                <div
                    className='sm:shadow-[.2px_.2px_3px_1px] sm:shadow-gray-200 overflow-hidden 
            col-span-4 md:col-span-4 xxl:col-span-3 rounded-xl relative w-full md:h-[90vh]'
                >
                    {children}
                </div>}
        </div>
    )
}

export default HandleGridView