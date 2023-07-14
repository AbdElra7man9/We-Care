'use client';
import { useGetUserByIdQuery } from '@Redux/APIs/UserApi';
import { useParams } from 'next/navigation';
import { FC } from 'react'

interface summeryProps {

}

const summery: FC<summeryProps> = ({ }) => {
    const params = useParams() as { username: string };
    const username = params.username
    const { data } = useGetUserByIdQuery({ username })
    const { user } = data || {}
    return <p className='text-gray-400 leading-loose'>{user?.summery}</p>
}

export default summery