import Footer from "@Components/app/Footer";
import Header from "@Components/app/Header";
import React from "react";
import SideBar from "./SideBar";

export default function DoctorWraper({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isFull={true} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-1 dark:bg-slate-900 select-none container max-w-[140rem] px-5'>
                <div className='md:mt-10 md:col-span-2 xxl:col-span-1 px-3 py-16'>
                    <SideBar />
                </div>
                <div className='w-full md:col-span-2 xxl:col-span-3'>
                    <div className='xl:pt-5'>
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
