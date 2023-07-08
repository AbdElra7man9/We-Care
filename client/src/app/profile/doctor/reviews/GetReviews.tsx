'use client';
import ShowRating from '@Components/Parts/ShowRating';
import { useAppSelector } from '@Hooks/useRedux';
import { useGetDoctorLoggedReviewsQuery, useGetDoctorReviewsQuery } from '@Redux/APIs/ReviewsApi';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import moment from 'moment';
import Image from 'next/image'
import { FC } from 'react'

interface GeReviewsProps {

}

const GetReviews: FC<GeReviewsProps> = ({ }) => {
    const { data } = useGetDoctorLoggedReviewsQuery({ page: 1, limit: 10 })
    const { reviews } = data || {}
    return (
        <div className='my-5'>
            <h2 className='py-3 font-medium text-lg'>Comments :</h2>
            {reviews?.map(review => (
                <div key={review._id}>
                    <div className='flex items-center gap-3'>
                        {review?.patient?.profilePicture &&
                            <Image
                                height={100}
                                width={100}
                                draggable={false}
                                src={review?.patient?.profilePicture ?? '/'}
                                alt={review?.patient?.name ?? ''}
                                className='w-14 h-14 rounded-full object-cover'
                            />
                        }
                        <span>
                            <p className='font-medium text-lg text-gray-600 dark:text-slate-300'>{review.patient?.name}</p>
                            <p className='text-slate-500 dark:text-slate-400 text-sm'>{(moment(review.createdAt).fromNow())}</p>
                        </span>
                    </div>
                    <div className='bg-sky-50 dark:bg-slate-800 p-5 w-full rounded-md my-2'>
                        <ShowRating Rating={review.rating as number}/>
                        <p>{review.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GetReviews