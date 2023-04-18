import { FC } from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi'

interface RatingProps {
    rating: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
    return (
        <div className='flex gap-1 text-orange-600'>
            {Array(rating).fill(0).map((item, index) => (
                <div key={index}>
                    <HiStar size={22} />
                </div>
            ))}
            {Array(5 - rating).fill(0).map((item, index) => (
                <div key={index}>
                    <HiOutlineStar size={22} />
                </div>
            ))}
        </div>
    )
}

export default Rating