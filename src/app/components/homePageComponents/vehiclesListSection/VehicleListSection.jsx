import "./vehicleListSection.css";
import VehiclesList from "./vehiclesList/VehiclesList";
const VehicleListSection = () => {
  return (
    <div className="vehicleListSection-container">
      <h1 className="vehicleListSection-heading">
        Maximum Comfort And Safety For Your Trip
      </h1>
      <VehiclesList />
    </div>
  );
};

export default VehicleListSection;
