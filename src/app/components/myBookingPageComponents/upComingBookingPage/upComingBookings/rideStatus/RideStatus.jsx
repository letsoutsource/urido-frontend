import "./rideStatus.css";
const RideStatus = ({ status }) => {
  return (
    <div className="rideStatus-container">
      <h5 className="rideStatus-header">Status : </h5>
      <p className="rideStatus-para">{status}</p>
    </div>
  );
};

export default RideStatus;
