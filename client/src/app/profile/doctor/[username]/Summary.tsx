'use client';
import { useAppSelector } from '@Hooks/useRedux'
import { selectCurrentUser } from '@Redux/Slices/UserSlice'
import { FC } from 'react'

interface SummaryProps {

}

const Summary: FC<SummaryProps> = ({ }) => {
    const userInfo = useAppSelector(selectCurrentUser)
    return <p className='text-gray-400 leading-loose'>{userInfo.summary}</p>
}

export default Summary