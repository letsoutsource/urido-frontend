import Image from "next/image";
import "./rideLocationDetails.css";

const RideLocationDetails = ({ from, to }) => {
  return (
    <div className="ride-history-location-details">
      <div className="ride-history-location-heading-row">
        <Image src="/location-gray.png" alt="from" height={18} width={18} />
        <h5 className="ride-history-heading-from">FROM :</h5>
      </div>
      <p className="ride-history-location-para">{from}</p>
      <div className="ride-history-location-heading-row">
        <Image src="/location-gray.png" alt="to" height={18} width={18} />
        <h5 className="ride-history-heading-to">TO :</h5>
      </div>
      <p className="ride-history-location-para">{to}</p>
    </div>
  );
};

export default RideLocationDetails;
