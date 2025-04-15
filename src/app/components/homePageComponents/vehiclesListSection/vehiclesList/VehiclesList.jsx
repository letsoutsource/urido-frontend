import Image from "next/image";
import "./vehiclesList.css";
import { vehicles } from "./vehicleData";

const VehiclesList = async () => {
  return (
    <div className="vehicleListSection-vehicles">
      {vehicles?.map((vehicle, index) => (
        <div className="vehicleListSection-vehicle" key={index}>
          <Image
            src={vehicle.vehicleImage}
            width={265}
            height={160}
            alt="lutton peterboroguh london cheap taxi and airport transfers"
            className="vehicleListSection-vehicle-image"
          />
          <h4 className="vehicleListSection-vehicle-name">
            {vehicle.vehicleName}
          </h4>
          <div className="vehicleListSection-vehicle-details">
            <div className="vehicleListSection-vehicle-passenger">
              <Image
                src="/passenger-gray.png"
                alt="passenger"
                height={22}
                width={22}
              />
              <span>:</span>
              <p>{vehicle.passenger}</p>
            </div>
            <span>|</span>
            <div className="vehicleListSection-vehicle-luggage">
              <Image
                src="/luggage-gray.png"
                alt="luggage"
                height={22}
                width={22}
              />
              <span>:</span>
              <p>{vehicle.luggage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehiclesList;
