'use client';
import DoctorsList from '@Components/Parts/DoctorsList';
import { useGetTopDoctorsQuery } from '@Redux/APIs/DoctorApi';
import { userType } from '@lib/types/user';
import { FC } from 'react'

interface TopDoctorProps {

}

const TopDoctor: FC<TopDoctorProps> = ({ }) => {
    const { data } = useGetTopDoctorsQuery({ page: 1, limit: 4 });
    const { allDoctors } = data || {}
    return (
        <DoctorsList Doctors={allDoctors as userType[]} />
    )
}

export default TopDoctor