"use client";
import GetError from "@lib/GetError";
import { useSigninUserMutation } from "@Redux/APIs/AuthApi";
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

export default function AddComment(): JSX.Element {
    const userRef = useRef<HTMLInputElement>(null);
    const [inputs, setInputs] = useState<Inputs>({
        name: "",
        department: "",
        doctor: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleChange = ({
        currentTarget: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs({ ...inputs, [input.name]: input.value });
    };
    const [signin, { isLoading, isError, error }] = useSigninUserMutation();
    // useEffect(() => {
    //   userRef.current.focus()
    // }, []);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, name, department, doctor, phone, message } = inputs;
        const data = { email, name, department, doctor, phone, message };
    };

    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-sm text-gray-500 font-medium text-start my-1">
                    Message
                </label>
                <textarea
                    placeholder="content..."
                    cols={60}
                    rows={5}
                    className="border p-3 outline-none inputfield rounded-lg g-24"
                />

                <button
                    aria-label='submit'
                    type='submit'
                    className='btn-primary mt-4'
                    disabled={isLoading}
                >
                    {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                        <ImSpinner7 /> </span> : 'Add Comment'}
                </button>
                {isError && <GetError error={error} />}
            </form>
        </>
    );
}
