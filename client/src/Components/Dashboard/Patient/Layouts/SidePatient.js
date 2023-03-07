import React from 'react'

const SidePatient = () => {
    const payment = [
        {
            img: 'https://shreethemes.in/doctris/layouts/assets/images/payment/mastercard.png',
            paymentName:'Mastercard',
            number: '4584',
            expires: '12/22'
        }, {
            img: 'https://shreethemes.in/doctris/layouts/assets/images/payment/discover.png',
            paymentName:'Discover',
            number: '5796',
            expires: '12/22'
        }, {
            img: 'https://shreethemes.in/doctris/layouts/assets/images/payment/rupay.png',
            paymentName:'Rupay',
            number: '4645',
            expires: '12/22'
        }, {
            img: 'https://shreethemes.in/doctris/layouts/assets/images/payment/american.png',
            paymentName:'American',
            number: '4875',
            expires: '12/22'
        },
    ]
    return (
        <div className='border w-[35rem] rounded-md m-3 shadow-sm p-5 lg:px-8 container max-w-full'>
            <div className='flex gap-5'>
                <img className='w-20 h-20 rounded-full'
                    src='https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg' alt='' />
                <div className='mt-3'>
                    <p className='font-medium text-lg'>Christopher Burrell</p>
                    <p className='text-gray-500'>25 Years old</p>
                </div>
            </div>
            <h2 className='bg-green-100 text-green-500 font-medium text-md text-center p-2 rounded-full my-2 border-green-200 border'>Helthy</h2>
            <div className='grid grid-cols-3 justify-center py-3'>
                <div className='text-center'>
                    <h3 className='font-medium text-gray-500'>Blood</h3>
                    <p>B+</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-medium text-gray-500'>Height</h3>
                    <p>175cm</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-medium text-gray-500'>Weight</h3>
                    <p>64k.g</p>
                </div>
            </div>
            <div>
                <h3 className='font-medium text-lg my-3'>Doctors</h3>
                <div className='flex gap-3'>
                    <img className='h-10 w-10 rounded-full shadow-md drop-shadow-xl' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg' alt='' />
                    <img className='h-10 w-10 rounded-full shadow-md drop-shadow-xl' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/02.jpg' alt='' />
                    <img className='h-10 w-10 rounded-full shadow-md drop-shadow-xl' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/03.jpg' alt='' />
                    <img className='h-10 w-10 rounded-full shadow-md drop-shadow-xl' src='https://shreethemes.in/doctris/layouts/assets/images/doctors/04.jpg' alt='' />
                </div>
            </div>
            <div>
                <h3 className='font-medium text-lg my-5'>Payment</h3>
                <div className='space-y-3'>
                    {payment?.map(item => (
                        <div className='flex gap-3 items-center'>
                            <img src={item?.img} alt='' className='w-16 h-16' />
                            <div className=''>
                                <h3>{item?.paymentName} •••• {item?.number}</h3>
                                <p className='text-sm text-gray-500'>Expires {item.expires}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className='bg-sky-100 text-sky-400 w-full py-2 my-3 rounded-md shadow-blue-200 shadow-md border border-blue-200'>View Profile</button>
        </div>
    )
}

export default SidePatient
