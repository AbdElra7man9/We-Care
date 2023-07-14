'use client';
import { useAppSelector } from '@Hooks/useRedux'
import { useGetUserByIdQuery } from '@Redux/APIs/UserApi';
import { selectCurrentUser } from '@Redux/Slices/UserSlice'
import { useParams } from 'next/navigation';
import { FC } from 'react'

interface SummaryProps {

}

const Summary: FC<SummaryProps> = ({ }) => {
    const params = useParams() as { username: string };
    const username = params.username
    const { data } = useGetUserByIdQuery({ username })
    const { user } = data || {}
    return <p className='text-gray-400 leading-loose'>{user?.summary}</p>
}

export default Summary