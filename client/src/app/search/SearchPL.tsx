'use client';
import { FC, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchPLProps {

}

const SearchPL: FC<SearchPLProps> = ({ }) => {
    const query = useSearchParams();
    const keyword = query?.get('keyword') || '' as string;
    const [keywordtext, setKeyword] = useState<string>(keyword);
    const router = useRouter();
    const submitsearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search?keyword=${keywordtext}`)
    }
    return (
        <div className='flex justify-end w-full mb-5'>
            <form onSubmit={submitsearch} className='border dark:border-slate-500 focus:border-blue-500 border-blue-200 rounded-full w-[60vw] xl:w-[35vw] flex justify-between'>
                <input
                    onChange={(e) => setKeyword(e.target.value)}
                    className='outline-none w-full p-3 bg-transparent dark:text-slate-200' defaultValue={keyword} type='search' placeholder='search..' />
                <button
                    type='submit'
                    className='bg-blue-600 text-white forn-medium text-sm rounded-full px-8 py-5'>Search</button>
            </form>
        </div>
    )
}

export default SearchPL