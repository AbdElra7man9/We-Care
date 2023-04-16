import { useAppDispatch } from '@Hooks/useRedux'
import { FeatureAction } from '@Redux/Slices/FeaturesSlice'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Blogs from './Blogs'

export default function page() {

    return (
        <>
            <Blogs />
        </>
    )
}
