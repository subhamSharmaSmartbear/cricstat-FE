import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Function to get and format the current date and time
const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString(); // Format the date as "MM/DD/YYYY"
  const time = now.toLocaleTimeString(); // Format the time as "HH:MM:SS AM/PM"
  return { date, time };
};

// Function to format a given date string
const formatDate = (dateStr) => {
  const [month, day, year] = dateStr.split('/').map(Number);
  const dateObj = new Date(year, month - 1, day);
  return format(dateObj, 'd MMMM, yyyy'); // e.g., "21 August, 2024"
};

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = formatDate(currentDateTime.date);

  return (
    <div className='w-[20vw] h-[100%] flex flex-col justify-end font-light'>
      <p className='text-white text-[40px]'>
        {currentDateTime.time.slice(0, -2)}{' '}
        <span className='text-[20px]'>{currentDateTime.time.slice(-2)}</span>
      </p>
      <p className='text-white text-[22px] font-light'>{formattedDate}</p>
    </div>
  );
};

export default CurrentDateTime;
