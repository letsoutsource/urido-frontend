import "./rideHistory.css";
import RideLocationDetails from "./rideLocationDetails/RideLocationDetails";
import RideVehicleDetails from "./rideVehicleDetails/RideVehicleDetails";
import RideReturnScheduleDetails from "./rideReturnDetails/RideReturnDetails";
import RidePrice from "./ridePrice/RidePrice";
import RideDateDetails from "./rideDateDetails/rideDateDetails";
const RideHistory = ({ rideData }) => {
  return (
    <div className="ride-history-wrapper">
      <h2 className="ride-history-heading">Ride History</h2>
      <div className="ride-history-container">
        {rideData?.map((ride, index) => (
          <div className="ride-history-box" key={index}>
            <div className="ride-history-price-date-row">
              <RideDateDetails
                date={ride.bookingDate}
                time={ride.bookingTime}
              />
              <RidePrice price={ride.totalFare} />
            </div>
            <RideLocationDetails
              from={ride.fromLocation}
              to={ride.toLocation}
            />
            <RideVehicleDetails
              vehicle={ride.vehicleName}
              passengerCount={ride.luggageAndPassenger.passengerCount}
              luggageCount={ride.luggageAndPassenger.luggageCount}
            />
            <RideReturnScheduleDetails
              returnDate={ride.returnDate}
              returnTime={ride.returnTime}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideHistory;
