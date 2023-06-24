'use client';
import AnimSlideDown from '@Animation/AnimSlideDown';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react'

interface SearchPanelProps {
    onClose: () => void
}

const SearchPanel: FC<SearchPanelProps> = ({ onClose }) => {
    const [keyword, setKeyword] = useState<string>('');
    const router = useRouter();

    return (
        <>
            <div className='fixed inset-0 bg-black/30 z-10' onClick={onClose}></div>
            <motion.div
                variants={AnimSlideDown}
                initial='initial'
                animate='animate'
                exit='exit'
                className='fixed inset-0 w-full bg-white dark:bg-slate-900 container max-w-full flex items-center justify-center h-[30vh] z-20'>
                <div className='flex flex-col gap-y-4 text-center'>
                    <p className='text-lg font-medium'>Search Now ...</p>
                    <form className='border dark:border-slate-500 focus:border-blue-500 border-blue-200 rounded-full w-[60vw] xl:w-[35vw] flex justify-between'>
                        <input
                            onChange={(e) => setKeyword(e.target.value)}
                            className='outline-none w-full p-3 bg-transparent dark:text-slate-200' type='search' placeholder='search..' />
                        <button
                            onClick={() => { router.push(`/search?keyword=${keyword}`) }}
                            className='bg-blue-600 text-white forn-medium text-sm rounded-full px-8 py-5'>Search</button>
                    </form>
                </div>
            </motion.div>

        </>)
}

export default SearchPanel