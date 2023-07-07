"use client";
import { iAppointments } from "@lib/types/appointment";
import { useBookAppointmentsMutation, useGetAvailableDoctorAppointmentsQuery } from "@Redux/APIs/AppointmentsApi";
import moment from "moment";
import { useParams } from "next/navigation";
import React, { useState, useRef, FC, useEffect } from "react";
import { toast } from "react-hot-toast";
import { ImSpinner7 } from "react-icons/im";
import Select from 'react-select';

interface FormProps {

}

interface OptionType {
    label: string;
    value: string;
}
const Form: FC<FormProps> = ({ }) => {
    const params = useParams() as { doctorId: string }
    const doctorId = params.doctorId
    const { data } = useGetAvailableDoctorAppointmentsQuery({ doctorId });
    const { availableAppointments } = data || {};
    const [AppointmentID, setSelectedAppointmentID] = useState<string>('');

    const appointmentOptions = availableAppointments?.map(appointment => ({
        label: moment(appointment.date).format('MMMM Do YYYY, h:mm:ss a'),
        value: appointment._id,
    }));
    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedAppointmentID(selectedOption ? selectedOption.value : '');
    };
    const selectedOption = appointmentOptions?.find(option => option.value === AppointmentID);

    const [BookAppointments, { isLoading }] = useBookAppointmentsMutation()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        BookAppointments({ AppointmentID }).unwrap()
            .then(() => {
                toast.success('booked successfully')
            })
    };

    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Choose day
                        </label>
                        <Select
                            options={appointmentOptions}
                            onChange={handleChange}
                            value={selectedOption}
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Choose time
                        </label>
                        <Select
                            options={appointmentOptions}
                            onChange={handleChange}
                            value={selectedOption}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Department
                        </label>
                        <input
                            type="email"
                            // onChange={handleChange}
                            name="email"
                            className="inputfield w-full"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Doctor
                        </label>
                        <input
                            type="tel"
                            // onChange={handleChange}
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
                />
                <button aria-label='submit' type='submit' className='btn-primary mt-4' disabled={isLoading}>
                    {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                        <ImSpinner7 />
                    </span> : 'Book an appointment'}
                </button>

            </form>
        </>
    )
}

export default Form