"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UpComingBookingsPage from "../components/myBookingPageComponents/upComingBookingPage/UpComingBookingsPage";
import { RideHistory } from "../components";
const MyBooking = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [rideData, setRideData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false);
      setRideData([]);
      return;
    }
    const fetchRideData = async () => {
      try {
        const response = await axios.get(
          "https://urido.co.uk/api/booking/my-bookings",
          { withCredentials: true }
        );
        if (response.data.success) {
          setRideData(response.data.data);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRideData();
  }, [isLoggedIn]);
  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }
  if (error) {
    return <div className="error-container">Error: {error.message}</div>;
  }
  const pendingStatuses = ["Pending", "Process", "Accepted"];
  const completedStatuses = ["Completed", "Rejected", "Canceled"];
  
  const pendingRides = rideData.filter((ride) => 
    pendingStatuses.includes(ride?.status)
  );
  
  const completedRides = rideData.filter((ride) => 
    completedStatuses.includes(ride?.status)
  );
  return (
    <div>
      <UpComingBookingsPage rideData={pendingRides} />
      {completedRides.length > 0 && <RideHistory rideData={completedRides} />}
    </div>
  );
};

export default MyBooking;
