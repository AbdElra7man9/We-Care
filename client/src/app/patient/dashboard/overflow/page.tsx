import AppointmentsList from "@app/patient/(components)/AppointmentsList";
import Contact from "@app/patient/(components)/Contact";
import MonthlyReports from "@app/patient/(components)/MonthlyReports";
import React from "react";
import HeartbeatChart from "./(GridCharts)/HeartbeatChart";
import HemoglobinChart from "./(GridCharts)/HemoglobinChart";
import SugarChart from "./(GridCharts)/SugarChart";
import WaterChart from "./(GridCharts)/WaterChart";

export default function page() {
  return (
    <div className='space-y-5'>
      <h3 className='text-xl font-medium pb-5 pl-5 lg:pl-0'>DashBoard</h3>
      <div className='grid grid-col-2 xxl:grid-cols-4 gap-5'>
        {/* <div className='space-y-5'>
          <WaterChart />
          <HemoglobinChart />
        </div>
        <div className='space-y-5'>
          <HeartbeatChart />
          <SugarChart />
        </div> */}
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-[36rem] overflow-hidden shadow-gray-100 rounded-lg p-5'>
          <AppointmentsList />
        </div>
        <div className='shadow-[.2px_.2px_3px_1px] h-[36rem] dark:shadow-slate-700 overflow-hidden shadow-gray-100 rounded-lg p-5'>
          <AppointmentsList />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
        <MonthlyReports />
        <Contact />
      </div>
    </div>
  );
}
