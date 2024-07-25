/* eslint-disable react/prop-types */
 import { useState } from "react";
 import { Box } from "@mui/material";
 import { startOfDay } from "date-fns";
 import DaySelector from "./DaySelector/DaySelector";
 import TimePicker from "./TimePicker/TimePicker";

const Calender = ({ availableSlots, details, handleBooking }) => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimePicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  )
}

export default Calender