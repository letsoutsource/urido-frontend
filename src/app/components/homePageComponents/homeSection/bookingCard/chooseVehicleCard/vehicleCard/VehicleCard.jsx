"use client";
import "./vehicleCard.css";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const VehicleCard = ({ setValue, distance, travelDuration }) => {
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("https://api.urido.co.uk/vehicles");
        setVehiclesData(response?.data.data);
      } catch (error) {
        console.error("Error fetching vehicles data:", error);
      }
    };
    fetchVehicles();
  }, []);

  const calculateTotalFare = (
    baseFare,
    distanceRate,
    timeRate,
    additionalCharges
  ) => {
    const distanceInMiles = parseFloat(distance);
    const durationInMinutes = parseFloat(travelDuration);
    const totalFare =
      baseFare +
      distanceInMiles * distanceRate +
      durationInMinutes * timeRate +
      (additionalCharges || 0);
    return totalFare.toFixed(2);
  };

  const handleGetRide = (
    vehicleName,
    baseFare,
    distanceRate,
    timeRate,
    additionalCharges
  ) => {
    const totalFare = calculateTotalFare(
      baseFare,
      distanceRate,
      timeRate,
      additionalCharges
    );
    setValue("vehicleName", vehicleName);
    setValue("totalFare", totalFare);
  };

  return (
    <div className="vehiclesCard-Cards">
      {vehiclesData?.map((vehicle) => {
        const totalFare = calculateTotalFare(
          vehicle.baseFare,
          vehicle.distanceRate,
          vehicle.timeRate,
          vehicle.additionalCharges
        );

        return (
          <div key={vehicle.id} className="vehiclesCard-Card">
            <div className="vehiclesCard-top">
              <Image
                src={vehicle.vehicleImage}
                alt={vehicle.vehicleName}
                width={144}
                height={87}
                className="vehicleCard-image"
              />
              <div className="vehiclesCard-VehicleDetails">
                <h5 className="vehiclesCard-VehicleName">
                  {vehicle.vehicleName}
                </h5>
                <div className="vehiclesCard-VehicleCapacityDetails">
                  <div className="vehicleCard-VehicleCapacity">
                    <Image
                      src="/passenger-black.png"
                      alt="passenger"
                      width={18}
                      height={18}
                      className="vehicleCard-passenger-icon"
                    />
                    <span>:</span>
                    <span className="vehiclesCard-capacityNumber">
                      {vehicle.passenger}
                    </span>
                  </div>
                  <span>|</span>
                  <div className="vehicleCard-VehicleCapacity">
                    <Image
                      src="/luggage-black.png"
                      alt="luggage"
                      width={18}
                      height={18}
                      className="vehicleCard-luggage-icon"
                    />
                    <span>:</span>
                    <span className="vehiclesCard-capacityNumber">
                      {vehicle.luggage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="vehiclesCard-bottom">
              <div className="vehiclesCard-priceAndButton">
                <div className="vehiclesCard-price">
                  <Image
                    src="/payment-gold.png"
                    alt="price"
                    width={18}
                    height={18}
                    className="vehiclesCard-price-icon"
                  />
                  {totalFare}
                </div>
                <button
                  className="vehiclesCard-button"
                  onClick={() =>
                    handleGetRide(
                      vehicle.vehicleName,
                      vehicle.baseFare,
                      vehicle.distanceRate,
                      vehicle.timeRate,
                      vehicle.additionalCharges
                    )
                  }
                >
                  Get Ride
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VehicleCard;
