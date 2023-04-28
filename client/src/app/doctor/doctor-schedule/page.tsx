import React from "react";
import Calendar from "@Components/Graphs/Calendar";
export default function page() {
  return (
    <div className='container px-0 max-w-full'>
      <p className='text-lg font-semibold py-5'>Schedule Timing</p>
      <Calendar />
    </div>
  );
}
