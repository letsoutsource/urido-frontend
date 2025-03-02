import Image from "next/image";
import "./vehiclesList.css";

const VehiclesList = async () => {
  try {
    const apiUrl = "https://api.urido.co.uk/vehicles";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch vehicles");
    }
    const data = await response.json();
    if (!data || !data.data) {
      throw new Error("Invalid API response structure");
    }
    const vehicles = data.data;
    return (
      <div className="vehicleListSection-vehicles">
        {vehicles?.map((vehicle, index) => (
          <div className="vehicleListSection-vehicle" key={index}>
            <Image
              src={vehicle.vehicleImage}
              width={265}
              height={160}
              alt={vehicle.vehicleName}
            />
            <h4 className="vehicleListSection-vehicle-name">{vehicle.vehicleName}</h4>
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
  } catch (error) {
    console.error("Error fetching vehicles:", error.message);
    return <div className="vehicleListSection-error">Failed to fetch vehicles. Please try again later.</div>;
  }
};

export default VehiclesList;