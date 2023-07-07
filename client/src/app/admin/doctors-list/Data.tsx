'use client';
import DoctorsList from '@Components/Parts/DoctorsList';
import { userType } from '@lib/types/user';
import { useGetDoctorsQuery } from '@Redux/APIs/DoctorApi';
import { FC } from 'react'

interface DataProps {

}

const Data: FC<DataProps> = ({ }) => {
    const { data } = useGetDoctorsQuery({ page: 1, limit: 10 });
    const { allDoctors } = data || {}
    return (
        <DoctorsList Doctors={allDoctors as userType[]} />

    )
}

export default Data