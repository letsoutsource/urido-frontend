import NoUpcomingBookings from "./noUpComingBookings/NoUpComingBookings";
import UpComingBookings from "./upComingBookings/UpComingBookings";
import "./upComingBookingsPage.css";
const UpComingBookingsPage = ({ rideData }) => {
  return (
    <div className="myBookingPage-container">
      <h2 className="myBookingPage-heading">Upcoming Rides</h2>
      {rideData.length > 0 ? (
        <UpComingBookings rideData={rideData} />
      ) : (
        <NoUpcomingBookings />
      )}
    </div>
  );
};

export default UpComingBookingsPage;
