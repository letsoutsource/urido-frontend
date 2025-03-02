import Image from "next/image";
import "./rideReturnDetails.css";
import { formatDate, formatTime } from "../../../../../../utils/Methods";
const RideReturnDetails = ({ returnDate, returnTime }) => {
  const formattedReturnDate = returnDate ? formatDate(returnDate) : null;
  const formattedReturnTime = returnTime ? formatTime(returnTime) : null;
  return (
    <div className="ride-history-return-box">
      <h5 className="ride-history-return-heading">Return Schedule :</h5>
      {returnDate ? (
        <div className="ride-history-return-date-box">
          <div className="ride-history-date">
            <Image src="/calendar.png" alt="calendar" height={18} width={18} />
            {formattedReturnDate}
          </div>
          <span>.</span>
          <div className="ride-history-time">
            <Image src="/clock.png" alt="clock" height={18} width={18} />
            {formattedReturnTime}
          </div>
        </div>
      ) : (
        <p className="ride-history-no-return">No Return Schedule</p>
      )}
    </div>
  );
};

export default RideReturnDetails;
