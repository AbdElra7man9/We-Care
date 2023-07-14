'use client';
import { useAppSelector } from '@Hooks/useRedux'
import { selectCurrentUser } from '@Redux/Slices/UserSlice'
import { FC } from 'react'

interface DataProfileProps {
  
}

const DataProfile: FC<DataProfileProps> = ({}) => {
    const userInfo = useAppSelector(selectCurrentUser);
  return <div>DataProfile</div>
}

export default DataProfile