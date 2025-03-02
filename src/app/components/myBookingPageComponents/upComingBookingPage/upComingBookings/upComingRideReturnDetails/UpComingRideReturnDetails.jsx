import Image from "next/image";
import "./upComingRideReturnDetails.css";
import { formatDate, formatTime } from "../../../../../../../utils/Methods";
const UpcomingRideReturnDetails = ({ returnDate, returnTime }) => {
  const formattedReturnDate = returnDate ? formatDate(returnDate) : null;
  const formattedReturnTime = returnTime ? formatTime(returnTime) : null;
  return (
    <div className="upComingRide-return-box">
      <h5 className="upComingRide-return-heading">Return Schedule :</h5>
      {returnDate ? (
        <div className="upComingRide-return-date-box">
          <div className="upComingRide-date">
            <Image src="/calendar.png" alt="calendar" height={18} width={18} />
            {formattedReturnDate}
          </div>
          <span>.</span>
          <div className="upComingRide-time">
            <Image src="/clock.png" alt="clock" height={18} width={18} />
            {formattedReturnTime}
          </div>
        </div>
      ) : (
        <p className="upComingRide-no-return">No Return Schedule</p>
      )}
    </div>
  );
};

export default UpcomingRideReturnDetails;
