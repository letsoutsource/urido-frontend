import Image from "next/image";
import "./rideDateDetails.css";
import { formatDate, formatTime } from "../../../../../../utils/Methods";
const RideDateDetails = ({ date, time }) => {
  const bookingDate = formatDate(date);
  const bookingTime = formatTime(time);
  return (
    <div className="ride-history-date-row">
      <div className="ride-history-date-box">
        <div className="ride-history-date">
          <Image
            src="/calender-golden.png"
            alt="calendar"
            height={18}
            width={18}
          />
          {bookingDate}
        </div>
        <span className="ride-history-dot">.</span>
        <div className="ride-history-time">
          <Image src="/clock-golden.png" alt="clock" height={18} width={18} />
          {bookingTime}
        </div>
      </div>
    </div>
  );
};

export default RideDateDetails;
