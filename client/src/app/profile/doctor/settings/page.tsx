import React from 'react'
import Image from 'next/image';
import Info from './Info';
import Password from './Password';
import Button from '@Components/ui/Button';
import DeleteAccount from './DeleteAccount';

const page: React.FC = () => {

    return (
        <div className=''>
            <h3 className='text-lg font-semibold'>Personal Information :</h3>

            <Info />
            <div className='space-y-5'>
                <h3 className='text-lg font-semibold'>Personal Information :</h3>
                <Password />
            </div>
            <DeleteAccount />
        </div>
    )
}

export default page
