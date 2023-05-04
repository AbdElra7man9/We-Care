'use client';
import { getSession, useSession } from 'next-auth/react'
import { FC } from 'react'

interface SessionProps {

}

const Session: FC<SessionProps> = ({ }) => {
    const { data: session,status } = useSession()
    const user = session?.user.age
    // const { user, token, role } = session
    const loading = status === 'loading'
    return (
        <>
            <p className='text-red-500 px-5 bg-white w-full h-10 text-3xl font-semibold py-28'>{JSON.stringify(user)}</p>
            {/* <p className='text-red-500 px-5 bg-white w-full h-10 text-3xl font-semibold py-28'>{JSON.stringify(role)}</p>
            <p className='text-red-500 px-5 bg-white w-full h-10 text-3xl font-semibold py-28'>{JSON.stringify(user)}</p>
            <p className='text-red-500 px-5 bg-white w-full h-10 text-3xl font-semibold py-28'>{JSON.stringify(token)}</p> */}
        </>
    )
}

export default Session