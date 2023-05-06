import Banner from '@app/(services)/Banner'
import BlogDetailsPage from '@Components/blog/BlogDetailsPage'
import React from 'react'

export default function page({ params, searchParams }: any) {
    const { blogId } = params

    return (
        <div>
            <Banner
                title='Lockdowns lead to fewer people seeking medical care'
                str1='Great doctor if you need your family member to get effective immediate assistance, emergency'
                str2='treatment or a simple consultation.'
                pageLink='terms'
                isdate={true}
            />
            <div className='container max-w-7xl'>
                <BlogDetailsPage blogId={blogId} />
            </div>
        </div >
    )
}
