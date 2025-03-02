import Image from "next/image";
import "./rideVehicleDetails.css";
const RideVehicleDetails = ({ vehicle, passengerCount, luggageCount }) => {
  return (
    <div className="ride-history-vehicle-details-row">
      <div className="ride-history-vehicle-image-wrapper">
        <Image
          src="/ride-history-car.png"
          alt="car"
          height={50}
          width={68}
          className="ride-history-vehicle-image"
        />
      </div>
      <div className="ride-history-vehicles-details">
        <div className="ride-history-vehicleAndReview">
          <h5 className="ride-history-vehicle-name">{vehicle}</h5>
          <span>.</span>
          <Image src="/star.png" alt="star" height={21} width={21} />
          <p className="ride-history-review-stars">{vehicle.reviewStars}</p>
        </div>
        <div className="ride-history-vehicle-capacity">
          <div className="ride-history-capacity-detail">
            <Image
              src="/passenger.png"
              alt="passenger"
              height={18}
              width={18}
            />
            <span>:</span>
            <h5 className="ride-history-vehicle-passengers">
              {passengerCount}
            </h5>
          </div>
          <span className="ride-history-capacity-detail-divider">.</span>
          <div className="ride-history-capacity-detail">
            <Image src="/luggage.png" alt="luggage" height={18} width={18} />
            <span>:</span>
            <h5 className="ride-history-vehicle-luggage">{luggageCount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideVehicleDetails;
