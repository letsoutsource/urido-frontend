"use client";
import "./bookingCard.css";
import DateTimePicker from "./dateTimePicker/DateTimePicker";
import DistanceDurationField from "./distanceDurationField/DistanceDurationField";
import LocationInput from "./locationInput/LocationInput";
import PassengerInput from "./passengerInput/PassengerInput";
import LuggageInput from "./luggageInput/LuggageInput";
import ChooseVehicleCard from "./chooseVehicleCard/ChooseVehicleCard";
import SignInPopup from "./signInPopup/SignInPopup";
import { AiOutlineClose } from "react-icons/ai";
import { useBooking } from "./useBooking";

const BookingCard = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    isReturnTrip,
    setIsReturnTrip,
    isVehicleCardOpen,
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
    setIsVehicleCardOpen,
    calculateTimeDifference,
  } = useBooking();
  return (
    <form
      className="home-booking-card-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="home-booking-card">
        <LocationInput
          icon="/location.png"
          placeholder="From (Address, Airport)"
          value={fromLocation}
          onChange={(value) => setValue("fromLocation", value)}
          onSelect={(value) => setValue("fromLocation", value)}
        />
        <LocationInput
          icon="/location.png"
          placeholder="To (Address, Airport)"
          value={toLocation}
          onChange={(value) => setValue("toLocation", value)}
          onSelect={(value) => setValue("toLocation", value)}
        />
        <div className="date-time-row">
          <DateTimePicker
            icon="/calendar.png"
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            isTime={false}
            className="booking-date-input" 
          />
          <DateTimePicker
            icon="/clock.png"
            selected={bookingTime}
            onChange={(time) => setBookingTime(time)}
            isTime={true}
             className="booking-time-input"
          />
        </div>
        {isReturnTrip && (
          <div className="date-time-row return-row">
            <DateTimePicker
              icon="/calendar.png"
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              isTime={false}
                className="return-date-input"
            />
            <div className="return-time-wrapper">
              <DateTimePicker
                icon="/clock.png"
                selected={returnTime}
                onChange={(time) => setReturnTime(time)}
                isTime={true}
                 className="return-time-input"
              />
            </div>
            <AiOutlineClose
              className="remove-return-icon"
              onClick={handleRemoveReturn}
            />
          </div>
        )}
        {!isReturnTrip && (
          <div className="addreturn-div">
            <button
              type="button"
              className="addreturn-button"
              onClick={() => setIsReturnTrip(true)}
            >
              Add Return
            </button>
          </div>
        )}
        <div className="luggage-passenger-row">
          <PassengerInput control={control} name="passengerCount" />
          <LuggageInput control={control} name="luggageCount" />
        </div>
        <DistanceDurationField
          from={fromLocation}
          to={toLocation}
          onDistanceDurationFetched={handleDistanceDurationFetched}
        />
        <button
          type="button"
          className={`getride-button ${isGetQuoteDisabled ? "disabled" : ""}`}
          onClick={toggleVehicleCard}
          disabled={isGetQuoteDisabled}
          title={
            isGetQuoteDisabled
              ? "Please select both 'From' and 'To' locations"
              : ""
          }
        >
          Get Quote
        </button>
      </div>
      {isVehicleCardOpen && (
        <ChooseVehicleCard
          onGetRideClick={toggleVehicleCard}
          setValue={setValue}
          distance={distance}
          travelDuration={travelDuration}
          isReturnTrip={isReturnTrip}
          calculateTimeDifference={calculateTimeDifference}
        />
      )}
      {showSignInPopup && (
        <SignInPopup setShowSignInPopup={setShowSignInPopup} setIsVehicleCardOpen={setIsVehicleCardOpen} />
      )}
    </form>
  );
};

export default BookingCard;