import React from 'react'
import { FaClipboardList } from 'react-icons/fa';

const PaymentsList = () => {
  const appointemnts = [
    {
      _id: '1',
      method: 'Cardiogram',
      ispaid: 'Full bill paid',
    }, {
      _id: '2',
      method: 'Checkup',
      ispaid: 'Full bill paid',
    }, {
      _id: '3',
      method: 'Covid Test',
      ispaid: 'Full bill paid',
    }, {
      _id: '4',
      method: 'Dentist',
      ispaid: 'Full bill paid',
    }, {
      _id: '5',
      method: 'Eye Test',
      ispaid: 'Full bill paid',
    }
  ]
  return (
    <div>
      <h3 className='text-lg font-medium'>Payment List</h3>
      <div className='h-full overflow-scroll hideScroll'>
        {appointemnts?.map(spec => (
          <div key={spec?._id} className='border border-gray-200 w-full rounded-md flex justify-between items-center p-3 my-4'>
            <div>
              <p className='font-medium text-gray-700'>{spec?.method}</p>
              <p className='text-gray-500 text-sm'>{spec?.ispaid}</p>
            </div>
            <button className='bg-blue-600 text-white p-2 rounded-lg '>
              <FaClipboardList size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentsList
