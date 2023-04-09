"use client";
import { useSigninMutation } from "@Redux/APIs/AuthApi";
import React, { useState, useRef, useEffect } from "react";
import { ImSpinner7 } from "react-icons/im";
interface Inputs {
  name: string;
  department: string;
  doctor: string;
  email: string;
  phone: string;
  message: string;
}

export default function Page(): JSX.Element {
  const userRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    department: "",
    doctor: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const [signin, { isLoading, isError, error }] = useSigninMutation();
  // useEffect(() => {
  //   userRef.current.focus()
  // }, []);
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const { email, name, department, doctor, phone, message } = inputs;
  //   const data = { email, name, department, doctor, phone, message };
  //   await signin(data).unwrap()
  //     .then(() => {
  //       setInputs({
  //         name: '',
  //         department: '',
  //         doctor: '',
  //         email: '',
  //         phone: '',
  //         message: '',
  //       });
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // };

  return (
    <div>
      <form className="flex flex-col"
      // onSubmit={handleSubmit}
      >
        <label className="text-sm text-gray-500 font-medium text-start my-1">
          Your Email
        </label>
        <input
          type="email"
          ref={userRef}
          onChange={handleChange}
          name="email"
          className="inputfield"
          placeholder="Phone number username,or email"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray-500 font-medium text-start my-1">
              Your password
            </label>
            <select
              onChange={handleChange}
              name="department"
              className="inputfield w-full"
            >
              <option>Eye</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-500 font-medium text-start my-1">
              Your password
            </label>
            <select
              onChange={handleChange}
              name="doctor"
              className="inputfield w-full"
            >
              <option>Eye</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray-500 font-medium text-start my-1">
              Your Email
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              className="inputfield w-full"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 font-medium text-start my-1">
              Your Phone Number
            </label>
            <input
              type="tel"
              onChange={handleChange}
              name="phone"
              className="inputfield w-full"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <label className="text-sm text-gray-500 font-medium text-start my-1">
          Message
        </label>
        <textarea
          placeholder="content..."
          cols={60}
          rows={5}
          className="border p-3 outline-none inputfield rounded-lg g-24"
        ></textarea>
        <button aria-label='submit' type='submit' className='btn-primary mt-4' disabled={isLoading}>
          {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'><ImSpinner7 /> </span> : 'Book an appointment'}</button>
        {isError && <span className="text-red-500 pb-3 font-poppins font-medium"></span>}
      </form>
    </div>
  );
}
