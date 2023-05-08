'use client';
import Header from "@Components/app/Header";
import { useGetDoctorsQuery } from "@Redux/APIs/DoctorApi";
import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function DoctorWraper({
    children
}: {
    children: React.ReactNode;
}) {
    const { data } = useGetDoctorsQuery({ page: 1, limit: 10 });
    const { doctors } = data || {};
    return (
        <>
            <div className="h-24">
                <Header isFull={true} drDash={true} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-8 gap-1 dark:bg-slate-900 select-none container max-w-[140rem] px-3'>
                <div className='md:col-span-3 xxl:col-span-2 px-3 mt-3'>
                    <SideBar />
                </div>
                <div className='w-full md:col-span-5 xxl:col-span-6'>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
