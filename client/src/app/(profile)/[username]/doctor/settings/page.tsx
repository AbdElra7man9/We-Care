import React from 'react'
import UpdateInfo from '@app/(profile)/(Components)/UpdateInfo';
import UpdateImage from '@app/(profile)/(Components)/UpdateImage';
import Password from '@app/(profile)/(Components)/Password';
import DeleteAccount from '@app/(profile)/(Components)/DeleteAccount';
import { authOptions } from '@lib/auth';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';


export default async function page(){
    const session = await getServerSession(authOptions);
    const doctor = session?.role === 'Doctor'
    if (!doctor) {
        return notFound()
    }
    return (
        <div className=''>
            <h3 className='text-lg font-semibold'>Personal Information :</h3>
            <UpdateImage />
            <UpdateInfo />
            <div className='space-y-5'>
                <h3 className='text-lg font-semibold'>Personal Information :</h3>
                <Password />
            </div>
            <DeleteAccount />
        </div>
    )
}

