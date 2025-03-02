"use client";
import { toggle } from "@/store/slices/credentialsSlice";
import "./noUpComingBookings.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const NoUpcomingBookings = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      dispatch(toggle());
    }
    if (isLoggedIn) {
      router.push("/");
    }
  };
  return (
    <div className="no-bookings-box">
      <h4 className="no-bookings-box-heading">
        {isLoggedIn ? "No Upcoming Bookings" : "You Are Not Signed In"}
      </h4>
      <p className="no-bookings-box-para">
        {isLoggedIn
          ? "You don’t have any upcoming rides scheduled. Book now to plan your next journey!"
          : "Please sign in to view and manage your bookings effortlessly."}
      </p>
      <button onClick={handleButtonClick} className="no-bookings-box-button">
        {isLoggedIn ? "Get Ride" : "Sign In"}
      </button>
    </div>
  );
};

export default NoUpcomingBookings;
