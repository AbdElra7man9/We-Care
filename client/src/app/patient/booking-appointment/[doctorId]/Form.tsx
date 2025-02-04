"use client";
import moment from "moment";
import { useAppDispatch } from "@Hooks/useRedux";
import React, { useState, FC, useEffect } from "react";
import { iAppointments } from "@lib/types/appointment";
import { useGetAvailableDaysQuery } from "@Redux/APIs/AppointmentsApi";
import { useGetDoctorByIdQuery } from "@Redux/APIs/DoctorApi";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { ImSpinner7 } from "react-icons/im";
import { useNewPaymentSessionMutation } from "@Redux/APIs/PaymentApi";
import { useRouter } from "next/navigation";
import Select from 'react-select';
const url = process.env.NEXT_PUBLIC_API_KEY;

interface FormProps {
    type: string;
}

interface OptionType {
    label: string;
    value: string;
}
const Form: FC<FormProps> = ({ type }) => {
    const params = useParams() as { doctorId: string }
    const doctorId = params.doctorId
    const [appointmentId, setSelectedAppointmentID] = useState<string>('');
    const [comment, setComment] = useState<string>('')
    const [availableAppointments, setAvailbleAppointments] = useState<{ availableAppointmentsByDay: iAppointments[] | undefined }>();
    const [day, setDay] = useState<string>('');
    const { data: AvailableDaysData } = useGetAvailableDaysQuery({ doctorId });
    const { data: DoctorData } = useGetDoctorByIdQuery({ doctorId });
    const { doctor } = DoctorData || {}
    const { availableDayes } = AvailableDaysData || {}
    const router = useRouter()
    const dispatch = useAppDispatch();
    const DaysOptions = availableDayes?.map(appointment => ({
        label: moment(appointment).format('dddd'),
        value: appointment,
    }));
    const handleChangeDays = (selectedOption: OptionType | null) => {
        setDay(selectedOption ? selectedOption.value : '');
    };
    let selectedOptionDay = DaysOptions?.find(option => option.value === day);

    //For time
    const appointmentOptions = availableAppointments?.availableAppointmentsByDay?.map(appointment => ({
        label: moment(appointment.date).format('LT'),
        value: appointment._id,
    }));
    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedAppointmentID(selectedOption ? selectedOption.value : '');
    };
    let selectedOption = appointmentOptions?.find(option => option.value === appointmentId);
    useEffect(() => {
        console.log(day)
        if (day !== '') {
            const fetchAvailableDoctorAppointmentsByDay = async () => {
                const response = await fetch(`${url}/api/v1/appointments/availableByday/${doctorId}?day=${day}&type=${type}`, {
                    method: 'GET',
                });

                if (response.status === 200) {
                    const data = await response.json();
                    setAvailbleAppointments(data)
                    return data;
                } else {
                    const error = await response.json() as { message: string }
                    toast.error(error.message)
                }
            };
            fetchAvailableDoctorAppointmentsByDay()
        }
    }, [day, dispatch]);

    const [NewPayment, { isLoading }] = useNewPaymentSessionMutation()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        NewPayment({ appointmentId }).unwrap()
            .then((payload) => {
                localStorage.setItem('comment', comment);
                localStorage.setItem('apiKey', payload.session.id);
                toast.loading('redirect to payment');
                router.push(payload.session.url)
                setComment('');
                selectedOption = { value: '', label: '' };
                selectedOptionDay = { value: '', label: '' };
                setSelectedAppointmentID('');
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
                            options={DaysOptions}
                            onChange={handleChangeDays}
                            value={selectedOptionDay}
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
                            type="text"
                            disabled
                            defaultValue={doctor?.specialization as string}
                            name="email"
                            className="inputfield w-full"
                            placeholder="Doctor Specilization"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Doctor
                        </label>
                        <input
                            type="text"
                            disabled
                            defaultValue={doctor?.name as string}
                            name="phone"
                            className="inputfield w-full disabled:no-underline"
                            placeholder="Doctor Name"
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
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
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