import React from 'react'
const Message = ({ message, Patient }) => {
    return (
        <div className='pt-3 p-3'>
            <div className={`flex ${Patient ? 'justify-start' : 'justify-end'}`}>
                <div className={`border h-10 rounded-3xl flex items-center px-5 py-8 ${Patient ? 'justify-start' : 'justify-end bg-gray-200'}`}>
                    <p>{message?.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Message