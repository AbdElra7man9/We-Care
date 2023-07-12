import React from 'react'
import UpdateInfo from '../../(Components)/UpdateInfo';
import UpdateImage from '@app/profile/(Components)/UpdateImage';
import Password from '@app/profile/(Components)/Password';
import DeleteAccount from '@app/profile/(Components)/DeleteAccount';


const page: React.FC = () => {

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

export default page
