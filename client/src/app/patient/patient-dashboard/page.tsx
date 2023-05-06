import React from "react";
import PatientMain from "./PatientMain";
import SidePatient from "./SideBar";

export default function page() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-7 container max-w-[140rem] px-5'>
        <div className='mt-20 lg:col-span-2 xxl:col-span-1'>
          <SidePatient />
        </div>
        <div className='w-full lg:col-span-2 xxl:col-span-3'>
          <div className='pt-24'>
            <PatientMain />
          </div>
        </div>
      </div>
    </>
  );
}
