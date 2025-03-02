"use client";
import CrossSign from "@/assets/crossSign";
import "./chooseVehicleCard.css";
import VehicleCard from "./vehicleCard/VehicleCard";

const ChooseVehicleCard = ({ onGetRideClick, setValue, distance, travelDuration }) => {
  return (
    <div className="vehiclesCard-container">
      <div className="vehiclesCard-header">
        <h4 className="vehiclesCard-heading">Choose Vehicle</h4>
        <button onClick={onGetRideClick} className="vehiclesCard-closeButton">
          <CrossSign />
        </button>
      </div>
      <div className="vehiclesCard-content">
        <VehicleCard setValue={setValue} distance={distance} travelDuration={travelDuration} />
      </div>
    </div>
  );
};

export default ChooseVehicleCard;