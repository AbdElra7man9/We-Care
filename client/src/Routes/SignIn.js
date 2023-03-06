import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import { useSigninMutation } from '../Redux/APIs/AuthApi';
import { ImSpinner7 } from 'react-icons/im';
const SignIn = () => {
  const userRef = useRef();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  useEffect(() => {
    if (localStorage.getItem("persist") === true) {
      navigate("/");
    }
  })
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setInputs({ ...inputs, [input.name]: input.value });
  };
  const [signin, { isLoading, isError, error }] = useSigninMutation();
  useEffect(() => {
    userRef.current.focus()
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = inputs;
    const data = { email, password }
    await signin(data).unwrap()
      .then(payload => {
        navigate('/')
        setInputs({ email: '', password: '' });
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div className='container px-5 max-w-5xl flex gap-1 place-content-center mt-[2rem] md:mt-[6rem] mb-5 md:mb-28'>
        <div className='container px-3 max-w-md md:mt-16'>
          <div className='md:border rounded-lg  border-gray-300 md:max-w-[90%] xsm:px-5 md:px-6 items-center text-center md:bg-white'>
            <Link to="/">
              <div className='flex items-center justify-center wfull gap-2 py-10 instalogo'>
                <img className='w-10 h-10 rounded-xl'
                  src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                <p className='text-2xl font-bold'>Doctris</p>
              </div>
            </Link>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <label className='text-sm text-gray-500 font-medium text-start my-1'>Your Email</label>
              <input type='email' ref={userRef} onChange={handleChange} name='email' className='inputfield' placeholder='Phone number username,or email' />
              <label className='text-sm text-gray-500 font-medium text-start my-1'>Your password</label>
              <input type='password' onChange={handleChange} name='password' className='inputfield' placeholder='Password' />
              <button type='submit' className='btn-primary mt-4 !mb-8' disabled={isLoading}>
                {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'><ImSpinner7 /> </span> : 'Sign In'}</button>
              <div className='flex justify-center mt-4'>
                <hr className='w-[40%] mt-3'></hr>
                <p className='mx-3 font-semibold text-gray-500'>OR</p>
                <hr className='w-[40%] mt-3'></hr>
              </div>
              <button className='flex mx-auto pt-5 mb-3 ' >
                <div className='mt-1 text-blue-700 focus:text-blue-300 text-xl'>
                  <AiFillFacebook />
                </div>
                <p className=' focus:text-blue-300 ml-2 text-base text-blue-900 font-medium'>Log in with facebook</p>
              </button>
              <Link to='/forgetpassword' className='text-blue-800 focus:text-blue-300 md:mb-7 text-sm mt-2'>Forgot password ?</Link>
              {isError && <span className="text-red-500 pb-3 font-poppins font-medium">{error?.data?.message}</span>}
            </form>
          </div>
          <div className='md:border rounded-lg max-w-[90%] border-gray-300 justify-center flex mt-5 md:bg-white'>
            <p className="py-5 inline">Don't have an account? <Link to="/signup" className='font-semibold text-blue-400'>Sign up</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
