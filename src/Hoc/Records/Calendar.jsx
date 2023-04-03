import React from 'react'
import Calendar from "react-calendar";
export default function Calendars() {
  return (
    <div className='shadow-lg p-5 m-5 rounded-lg'>
          <h2 className="text-2xl text-deepBlue font-bold">
             Calendar
          </h2>
          
          <Calendar ></Calendar>
    </div>
  );
}
