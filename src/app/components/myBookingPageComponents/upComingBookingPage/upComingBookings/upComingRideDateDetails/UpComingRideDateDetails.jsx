import Image from "next/image";
import "./upComingRideDateDetails.css";
import { formatDate, formatTime } from "../../../../../../../utils/Methods";
const UpComingRideDateDetails = ({ date, time }) => {
  const bookingDate = formatDate(date);
  const bookingTime = formatTime(time);

  return (
    <div className="upComingRide-date-row">
      <div className="upComingRide-date-box">
        <div className="upComingRide-date">
          <Image
            src="/calender-golden.png"
            alt="calendar"
            height={18}
            width={18}
          />
          {bookingDate}
        </div>
        <span className="upComingRide-dot">.</span>
        <div className="upComingRide-time">
          <Image src="/clock-golden.png" alt="clock" height={18} width={18} />
          {bookingTime}
        </div>
      </div>
    </div>
  );
};

export default UpComingRideDateDetails;
