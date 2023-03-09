import React, { useState } from 'react'

const ProfileSettings = () => {
  const [inputs, setInputs] = useState({
    name: '',
    department: '',
    doctor: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = ({ currentTarget: input }) => {
    setInputs({ ...inputs, [input.name]: input.value });
  };
  return (
    <div className=''>
      <h3 className='text-lg font-semibold'>Personal Information :</h3>
      <div className='py-5 grid grid-cols-1 lg:grid-cols-2'>
        <div className='lg:flex gap-5 mx-auto text-center lg:text-start'>
          <img className='w-20 h-20 mx-auto rounded-full'
            src='https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg' alt='' />
          <div className='mt-3'>
            <p className='font-medium text-lg'>Upload your picture</p>
            <p className='text-gray-500 text-sm'>For best results, use an image at least 256px<br /> by 256px in either .jpg or .png format</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <button className='bg-blue-600 active:bg-blue-700 text-white font-medium w-full py-2 my-3 rounded-md border border-blue-200'>Upload</button>
          <button className='bg-sky-100 active:bg-sky-200 active:shadow-blue-300 text-sky-400 w-full py-2 my-3 rounded-md shadow-blue-200 shadow-md border border-blue-200'>Remove</button>
        </div>
      </div>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div>
            <label className='text-sm text-gray-500 font-medium text-start my-1.5'>First Name</label>
            <input type='email' onChange={handleChange} name='firstname' className='inputfield w-full' placeholder='Email' />
          </div>
          <div>
            <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Last Name</label>
            <input type='tel' onChange={handleChange} name='lastname' className='inputfield w-full' placeholder='Phone Number' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div>
            <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Your Email</label>
            <input type='email' onChange={handleChange} name='email' className='inputfield w-full' placeholder='Email' />
          </div>
          <div>
            <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Phone no.</label>
            <input type='tel' onChange={handleChange} name='phone' className='inputfield w-full' placeholder='Phone Number' />
          </div>
        </div>
        <div>
          <label className='text-sm text-gray-500 font-medium text-start my-1 block'>Your Bio Here</label>
          <textarea placeholder='content...' cols="60" rows="5" className='w-full border p-3 outline-none rounded-lg g-24 focus:border-blue-500' />
        </div>
        <button className='bg-blue-600 active:bg-blue-700 text-white w-36 font-medium py-2 my-3 rounded-md border border-blue-200'>SaveChanges</button>
      </form>
      <div className='space-y-5'>
        <h3 className='text-lg font-semibold'>Personal Information :</h3>
        <form>
          <div>
            <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Old password :</label>
            <input type='password' onChange={handleChange} name='oldpassword' className='inputfield w-full' placeholder='Old password' />
          </div>
          <div>
            <label className='text-sm text-gray-500 font-medium text-start my-1.5'>New password :</label>
            <input type='password' onChange={handleChange} name='newpassword' className='inputfield w-full' placeholder='New password' />
          </div>
          <div>
            <label className='text-sm text-gray-500 font-medium text-start my-1.5'>Re-type New password :</label>
            <input type='password' onChange={handleChange} name='oldpassword' className='inputfield w-full' placeholder='Re-type New password' />
          </div>
          <button className='bg-blue-600 active:bg-blue-700 text-white w-36 font-medium py-2 my-3 rounded-md border border-blue-200'>SaveChanges</button>
        </form>
      </div>
      <form className='space-y-3 my-5'>
        <h3 className='text-lg font-semibold text-red-500'>Delete Account :</h3>
        <p className='text-gray-400'>Do you want to delete the account? Please press below "Delete" button</p>
        <button className='bg-orange-600 active:bg-orange-700 text-white w-36 font-medium py-2 my-3 rounded-md border border-orange-200'>SaveChanges</button>
      </form>
    </div>
  )
}

export default ProfileSettings
