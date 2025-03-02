import React from "react";
import Image from "next/image";
import "./dateTimePicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = ({ icon, selected, onChange, isTime }) => (
  <div className={isTime ? "time-input-wrapper" : "date-input-wrapper"}>
    <Image
      src={icon}
      alt={isTime ? "time icon" : "date icon"}
      height={24}
      width={24}
    />
    <span className="input-divider">|</span>
    <DatePicker
      selected={selected}
      onChange={onChange}
      showTimeSelect={isTime}
      showTimeSelectOnly={isTime}
      timeIntervals={15}
      timeCaption={isTime ? "Time" : null}
      timeFormat="HH:mm"
      dateFormat={isTime ? "HH:mm" : "dd MMMM yyyy"}
      placeholderText={
        isTime
          ? new Date().toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })
          : new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
      }
      className={isTime ? "time-booking-input" : "date-booking-input"}
    />
  </div>
);

export default DateTimePicker;