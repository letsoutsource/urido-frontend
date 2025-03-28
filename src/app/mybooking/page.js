"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UpComingBookingsPage from "../components/myBookingPageComponents/upComingBookingPage/UpComingBookingsPage";
import { RideHistory } from "../components";
import Cookies from "js-cookie";
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
        const accessToken = Cookies.get("accessToken");
        if (!accessToken) {
          console.error("No access token found in cookies");
          return;
        }
        const response = await axios.get(
          "https://api.urido.co.uk/booking/my-bookings",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
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
    return (
      <div className="loading-container">
        <div className="loading-wrapper">
          <div className="cosmic-spinner">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
            <div className="center-circle"></div>
          </div>
          <div className="loading-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">🚖</div>
        <h3 className="error-title">Unable to load bookings</h3>
        <p className="error-message">
          {error.response?.data?.message || error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button className="error-button" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
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
