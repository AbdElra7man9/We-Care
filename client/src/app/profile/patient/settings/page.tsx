import DeleteAccount from '@app/profile/(Components)/DeleteAccount'
import Password from '@app/profile/(Components)/Password'
import UpdateImage from '@app/profile/(Components)/UpdateImage'
import UpdateInfo from '@app/profile/(Components)/UpdateInfo'
import React from 'react'


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
