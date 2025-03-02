import Image from "next/image";
import "./upComingRideLocation.css";

const UpComingRideLocation = ({ from, to }) => {
  return (
    <div className="upComingRide-location-details">
      <div className="upComingRide-location-heading-row">
        <Image src="/location-gold.png" alt="from" height={18} width={18} />
        <h5 className="upComingRide-heading-from">FROM :</h5>
      </div>
      <p className="upComingRide-location-para">{from}</p>
      <div className="upComingRide-location-heading-row">
        <Image src="/location-gold.png" alt="to" height={18} width={18} />
        <h5 className="upComingRide-heading-to">TO :</h5>
      </div>
      <p className="upComingRide-location-para">{to}</p>
    </div>
  );
};

export default UpComingRideLocation;
