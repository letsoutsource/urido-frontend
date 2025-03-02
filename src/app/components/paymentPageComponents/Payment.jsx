"use client";
import React, { useEffect, useState } from 'react';
import { FaCreditCard, FaWallet, FaUser } from 'react-icons/fa';
import { MdChevronRight } from "react-icons/md";
import './payment.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createBooking, decodeToken } from '../../../../utils/Methods';
import Cookies from 'js-cookie';

const Payment = () => {
  const router = useRouter();
  const bookingData = useSelector((state) => state.booking.bookingData);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (bookingData == null) {
      router.push('/');
    } else {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        const decodedToken = decodeToken(accessToken);
        if (decodedToken) {
          setUserData({
            username: decodedToken.userName || '',
            email: decodedToken.email || '',
            phone: decodedToken.phone || ''
          });
        }
      }
    }
  }, [bookingData, router]);

  if (bookingData == null) {
    return null;
  }

  const handleUsernameChange = (e) => {
    setUserData(prev => ({
      ...prev,
      username: e.target.value
    }));
  };

  const handlePaymentSubmit = () => {
    setIsConfirming(true);
  };

  const confirmPayment = async () => {
    try {
      setIsProcessing(true);
      const distance = parseFloat(bookingData.distance.replace(/[^\d.-]/g, ''));
      const dataToSend = {
        ...bookingData,
        distance,
        passengerName: userData.username,
        passengerEmail: userData.email,
        passengerPhone: userData.phone
      };
      await createBooking(dataToSend);
      toast.success("Booking Created Successfully!");
      router.push("/mybooking");
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Failed to process payment.");
      setIsProcessing(false);
    }
  };
  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        {/* Header */}
        <div className="payment-header">
          <h1>Complete Your Booking</h1>
          <p>Please review your booking details and select a payment method</p>
        </div>

        {/* Passenger Details Card */}
        <div className="card">
          <div className="card-header">
            <h2>Passenger Details</h2>
          </div>
          <div className="card-content">
            <div className="passenger-details">
              <div className="passenger-field">
                <label htmlFor="username">Passenger</label>
                <input
                  type="text"
                  id="username"
                  value={userData?.username}
                  onChange={handleUsernameChange}
                  className="passenger-input"
                  placeholder="Enter your name"
                  autoFocus
                />
              </div>
              <div className="passenger-field">
                <label>Email</label>
                <div className="passenger-readonly">{userData?.email}</div>
              </div>
              <div className="passenger-field">
                <label>Phone</label>
                <div className="passenger-readonly">{userData?.phone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Summary Card */}
        <div className="card">
          <div className="card-header">
            <h2>Booking Summary</h2>
          </div>
          <div className="card-content">
            <div className="booking-grid">
              <div className="booking-item">
                <div className="booking-label">From</div>
                <div className="booking-value">{bookingData.fromLocation}</div>
              </div>
              <div className="booking-item">
                <div className="booking-label">To</div>
                <div className="booking-value">{bookingData.toLocation}</div>
              </div>
              <div className="booking-item">
                <div className="booking-label">Date</div>
                <div className="booking-value">{bookingData.bookingDate}</div>
              </div>
              <div className="booking-item">
                <div className="booking-label">Time</div>
                <div className="booking-value">{bookingData.bookingTime}</div>
              </div>
              {bookingData.returnDate && (
                <>
                  <div className="booking-item">
                    <div className="booking-label">Return Date</div>
                    <div className="booking-value">{bookingData.returnDate}</div>
                  </div>
                  <div className="booking-item">
                    <div className="booking-label">Return Time</div>
                    <div className="booking-value">{bookingData.returnTime}</div>
                  </div>
                </>
              )}
            </div>

            <div className="separator" />

            <div className="summary-details">
              <div className="summary-row">
                <span className="label">Vehicle</span>
                <span>{bookingData.vehicleName}</span>
              </div>
              <div className="summary-row">
                <span className="label">Distance</span>
                <span>{bookingData.distance}</span>
              </div>
              <div className="summary-row">
                <span className="label">Travel Duration</span>
                <span>{bookingData.travelDuration}</span>
              </div>
              <div className="summary-row">
                <span className="label">Passengers</span>
                <span>{bookingData.passengerCount}</span>
              </div>
              <div className="summary-row">
                <span className="label">Luggage</span>
                <span>{bookingData.luggageCount}</span>
              </div>
            </div>

            <div className="separator" />

            <div className="total-row">
              <span>Total Amount</span>
              <span>${bookingData.totalFare}</span>
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="card">
          <div className="card-header">
            <h2>Select Payment Method</h2>
          </div>
          <div className="card-content">
            <div className="payment-methods">
              <div 
                className="payment-method-option disabled"
              >
                <input
                  type="radio"
                  className="payment-method-radio"
                  disabled
                />
                <div className="payment-method-label">
                  <FaCreditCard className="icon" />
                  <span>Credit/Debit Card (Disabled)</span>
                </div>
              </div>
              
              <div 
                className={`payment-method-option selected`}
              >
                <input
                  type="radio"
                  className="payment-method-radio"
                  checked
                  readOnly
                />
                <div className="payment-method-label">
                  <FaWallet className="icon" />
                  <span>Cash Payment</span>
                </div>
              </div>
            </div>

            {!isConfirming ? (
              <button 
                className="button button-primary"
                onClick={handlePaymentSubmit}
              >
                Continue to Payment
                <MdChevronRight />
              </button>
            ) : (
              <div>
                <p className="confirmation-message">
                  Please confirm your cash payment on delivery
                </p>
                <button 
                  className="button button-primary"
                  onClick={confirmPayment}
                  disabled={isProcessing} 
                  >
                  {isProcessing ? "Processing..." : "Confirm Payment"}
                </button>
                <button 
                  className="button button-outline"
                  onClick={() => setIsConfirming(false)}
                  disabled={isProcessing} 
                  >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;