import "./upComingBookings.css";
import UpComingBookingVehicleSection from "./upComingBookingVehicleSection/UpComingBookingVehicleSection";
import UpComingRideDateDetails from "./upComingRideDateDetails/UpComingRideDateDetails";
import UpComingRideLocation from "./upComingRideLocation/UpComingRideLocation";
import UpcomingRideReturnDetails from "./upComingRideReturnDetails/UpComingRideReturnDetails";

const UpComingBookings = ({ rideData }) => {
  return (
    <div className="upComingBookings-container">
      {rideData.map((ride, index) => (
        <div className="upComingBookings-box" key={index}>
          <div className="ride-dateAndReturn-column">
            <UpComingRideDateDetails
              date={ride.bookingDate}
              time={ride.bookingTime}
            />
            <UpcomingRideReturnDetails
              returnDate={ride.returnDate}
              returnTime={ride.returnTime}
            />
          </div>
          <UpComingRideLocation from={ride.fromLocation} to={ride.toLocation} />
          <UpComingBookingVehicleSection
            vehicle={ride.vehicleName}
            price={ride.totalFare}
            status={ride.status}
            passengerCount={ride.luggageAndPassenger.passengerCount}
            luggageCount={ride.luggageAndPassenger.luggageCount}
          />
        </div>
      ))}
    </div>
  );
};

export default UpComingBookings;
