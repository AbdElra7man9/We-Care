'use client';
import { FC } from 'react'
import { useParams } from 'next/navigation';

interface getTokenProps {

}

const getToken: FC<getTokenProps> = ({ }) => {
    const { token } = useParams()
    return token
}

export default getToken