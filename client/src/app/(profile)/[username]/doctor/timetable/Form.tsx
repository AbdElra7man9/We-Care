"use client";
import { useGetTimeBlockByDocIdQuery, useNewTimeBlockMutation } from "@Redux/APIs/TimeBlockApi";
import moment from "moment";
import { useParams } from "next/navigation";
import React, { useState, FC, useEffect } from "react";
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
    const params = useParams() as { username: string };
    const username = params.username
    const { data } = useGetTimeBlockByDocIdQuery({ username });
    const { TimeBlocks } = data || {};
    const [type, setType] = useState<string>('')
    const [period, setPeriod] = useState<number>();
    const [startTime, setStartTime] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [day, setDay] = useState<string>('');
    const [NewTimeBlock, { isLoading }] = useNewTimeBlockMutation()
    useEffect(() => {
        setStartTime(`${day}T${time}`);
    }, [day, time])
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!day) {
            return toast.error('Please choose day')
        }
        if (!time) {
            return toast.error('Please choose time')
        }
        if (!type) {
            return toast.error('Please choose type')
        }
        NewTimeBlock({ period, startTime, type }).unwrap()
            .then(() => {
                toast.success('booked successfully')
            })
            .catch((error: any) => {
                toast.error(error.data.message)
            })
    };

    const today = new Date(); // Get the current date
    function getDateOffset(offset: number): string {
        const date = new Date(today);
        date.setDate(today.getDate() + offset);
        return date.toISOString().split('T')[0]; // Format the date as "YYYY-MM-DD"
    }
    const dayOptions: { value: string; label: string }[] = [
        { value: getDateOffset(0), label: 'Sunday' },
        { value: getDateOffset(1), label: 'Monday' },
        { value: getDateOffset(2), label: 'Tuesday' },
        { value: getDateOffset(3), label: 'Wednesday' },
        { value: getDateOffset(4), label: 'Thursday' },
        { value: getDateOffset(5), label: 'Friday' },
        { value: getDateOffset(6), label: 'Saturday' }
    ];
    const startTimeOptions = [
        { value: '05:00:00', label: '5:00 AM' },
        { value: '10:00:00', label: '10:00 AM' },
        { value: '15:00:00', label: '3:00 PM' }
        // Add more start time options as needed
    ];
    const TypeOption = [
        { value: 'chat', label: 'Chat' },
        { value: 'video call', label: 'Video' },
        { value: 'visit', label: 'Visit' },
    ];
    const PeriodOption = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Choose day
                        </label>
                        <Select
                            options={dayOptions}
                            onChange={(data) => { setDay(data?.value as string) }}
                            isClearable
                            placeholder="-- Select a day --"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Choose time
                        </label>
                        <Select
                            options={startTimeOptions}
                            onChange={(data) => { setTime(data?.value as string) }}
                            isClearable
                            placeholder="-- Select a start time --"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Type
                        </label>
                        <Select options={TypeOption} onChange={(data) => setType(data?.value as string)} />
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-medium text-start my-1">
                            Type
                        </label>
                        <Select options={PeriodOption} onChange={(data) => setPeriod(data?.value as number)} />
                    </div>
                </div>
                <button aria-label='make time block' type='submit' className='btn-primary h-12 mt-4' disabled={isLoading}>
                    {isLoading ? <span className='flex items-center justify-center text-2xl py-1 animate-spin'>
                        <ImSpinner7 />
                    </span> : 'Save time block'}
                </button>

            </form>
            <div className='shadow-[.2px_.2px_3px_1px] w-full flex flex-col gap-y-2 ml-auto dark:shadow-slate-700 shadow-gray-100 rounded-lg overflow-hidden p-5'>
                {TimeBlocks?.map((time) => (
                    <div key={time?._id} className="grid grid-cols-4">
                        <p>{moment(time?.startTime).format('dddd')}</p>
                        <span className="flex text-start ">
                            <p>Start Time:</p>
                            <p className="text-blue-600">{moment(time?.startTime).format('LT')}</p>
                        </span>
                        <span className="flex text-start">
                            <p>Period:</p>
                            <p className="text-blue-600 font-medium mx-2">{time.period}</p>
                        </span>
                        <span className="flex text-start">
                            <p>type:</p>
                            <p className="text-blue-600 font-medium mx-2">{time.type}</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form