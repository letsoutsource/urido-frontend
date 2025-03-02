import Image from "next/image";
import "./ridePrice.css";
const RidePrice = ({ price }) => {
  return (
    <div className="ride-history-price">
      <Image
        src="/money-send-square.png"
        alt="payment"
        height={22}
        width={22}
      />
      <span>{price}</span>
    </div>
  );
};

export default RidePrice;
