import React from "react";
import "./bottomCard.css";
import BottomCardIcons from "./bottomCardIcons/BottomCardIcons";
import Image from "next/image";

const BottomCard = () => {
  return (
    <div className="specialaboutus-bottomcard">
      <div className="bottomcard-left">
        <h4 className="specialaboutus-bottomcard-head">Nation Wide</h4>
        <p className="specialaboutus-bottomcard-para">
          Your trusted ride, no matter where you are.
            Experience seamless, reliable, and stress-free journeys across the
            country with just a tap.
           </p>
        <div className="bottomcard-icons">
        <BottomCardIcons />
        </div>
      </div>
      <div className="bottomcard-right">
        <Image src="/car.png" alt="car" width={470} height={270}/>
      </div>
    </div>
  );
};

export default BottomCard;
