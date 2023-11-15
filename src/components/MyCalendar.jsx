import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="container mx-auto px-3 py-8">
        <Calendar onChange={onChange} value={value} />
      </div>
    </>
  );
};

export default MyCalendar;
