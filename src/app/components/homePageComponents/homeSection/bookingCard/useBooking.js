"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setBookingData } from "@/store/slices/bookingSlice";
import { formatDateTime } from "../../../../../../utils/Methods";

export const useBooking = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { control, register, handleSubmit, setValue, watch } = useForm();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isReturnTrip, setIsReturnTrip] = useState(false);
  const [isVehicleCardOpen, setIsVehicleCardOpen] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [distance, setDistance] = useState("N/A");
  const [travelDuration, setTravelDuration] = useState("N/A");
  const now = new Date()
  const [bookingDate, setBookingDate] = useState(now);
  const [bookingTime, setBookingTime] = useState(now);
  const [returnDate, setReturnDate] = useState(now);
  const [returnTime, setReturnTime] = useState(now);
  const fromLocation = watch("fromLocation");
  const toLocation = watch("toLocation");
  const isGetQuoteDisabled = !fromLocation || !toLocation;

  const toggleVehicleCard = () => {
    setIsVehicleCardOpen((prev) => !prev);
  };

  const handleDistanceDurationFetched = (fetchedDistance, fetchedDuration) => {
    setDistance(fetchedDistance);
    setTravelDuration(fetchedDuration);
  };

  const calculateTimeDifference = () => {
    if (!isReturnTrip) {
      return null;
    }
    const now = new Date();
    const bookingDateTime =
      bookingDate && bookingTime
        ? new Date(
            `${formatDateTime(bookingDate)}T${formatDateTime(
              bookingTime,
              true
            )}`
          )
        : now;

    const returnDateTime =
      returnDate && returnTime
        ? new Date(
            `${formatDateTime(returnDate)}T${formatDateTime(returnTime, true)}`
          )
        : new Date(now.getTime() + 60 * 60 * 1000); // Default to 1 hour later

    const timeDifferenceInMilliseconds = returnDateTime - bookingDateTime;
    const timeDifferenceInMinutes = timeDifferenceInMilliseconds / (1000 * 60);
    return timeDifferenceInMinutes;
  };

  const onSubmit = async (data) => {
    try {
      data.bookingDate = formatDateTime(bookingDate);
      data.bookingTime = formatDateTime(bookingTime, true);
      if (isReturnTrip) {
        data.returnDate = formatDateTime(returnDate);
        data.returnTime = formatDateTime(returnTime, true);
      }
      data.passengerCount = data.passengerCount || 1;
      data.luggageCount = data.luggageCount || 0;
      data.distance = distance;
      data.travelDuration = travelDuration;
      dispatch(setBookingData(data));
      router.push("/payment");
      toggleVehicleCard();
    } catch (error) {
      console.log("Error registering Booking", error);
      toggleVehicleCard();
    }
  };

  const handleRemoveReturn = () => {
    setIsReturnTrip(false);
    setReturnDate(null);
    setReturnTime(null);
  };

  return {
    control,
    register,
    handleSubmit,
    setValue,
    isReturnTrip,
    setIsReturnTrip,
    isVehicleCardOpen,
    setIsVehicleCardOpen,
    showSignInPopup,
    setShowSignInPopup,
    fromLocation,
    toLocation,
    distance,
    travelDuration,
    isGetQuoteDisabled,
    toggleVehicleCard,
    handleDistanceDurationFetched,
    onSubmit,
    handleRemoveReturn,
    bookingDate,
    setBookingDate,
    bookingTime,
    setBookingTime,
    returnDate,
    setReturnDate,
    returnTime,
    setReturnTime,
    calculateTimeDifference,
  };
};
