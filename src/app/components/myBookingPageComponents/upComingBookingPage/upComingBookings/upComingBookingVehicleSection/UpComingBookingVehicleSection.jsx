import Image from "next/image";
import "./upComingBookingVehicleSection.css";
import RideStatus from "../rideStatus/RideStatus";
const UpComingBookingVehicleSection = ({
  vehicle,
  price,
  status,
  passengerCount,
  luggageCount,
}) => {
  return (
    <div>
      <div className="upComingBooking-vehicle-details-row">
        <div className="upComingBooking-vehicle-image-wrapper">
          <Image
            src="/ride-history-car.png"
            alt="car"
            height={50}
            width={68}
            className="upComingBooking-vehicle-image"
          />
        </div>
        <div className="upComingBooking-vehicles-details">
          <h5 className="upComingBooking-vehicle-name">{vehicle}</h5>

          <div className="upComingBooking-vehicle-capacity">
            <div className="upComingBooking-vehicle-capacity-detail">
              <Image
                src="/passenger.png"
                alt="passenger"
                height={18}
                width={18}
              />
              <h5 className="upComingBooking-vehicle-passengers">
                {passengerCount}
              </h5>
            </div>
            <span>.</span>
            <div className="upComingBooking-vehicle-capacity-detail">
              <Image src="/luggage.png" alt="luggage" height={18} width={18} />
              <h5 className="upComingBooking-vehicle-luggage">
                {luggageCount}
              </h5>
            </div>
            <span>.</span>
            <div className="ride-history-price">
              <Image
                src="/money-send-square.png"
                alt="payment"
                height={18}
                width={18}
              />
              {price}
            </div>
          </div>
          
          <RideStatus status={status} />
        </div>
      </div>
    </div>
  );
};

export default UpComingBookingVehicleSection;
