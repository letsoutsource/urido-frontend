import React from "react";
import "./bottomCard.css";
import BottomCardIcons from "./bottomCardIcons/BottomCardIcons";
import Image from "next/image";

const BottomCard = () => {
  return (
    <div className="specialaboutus-bottomcard">
      <div className="bottomcard-left">
        <h4 className="specialaboutus-bottomcard-head">Nationwide</h4>
        <p className="specialaboutus-bottomcard-para">
          Your 24/7 minicab solution for stress-free airport transfers and
          comfortable private hire journeys across UK.
        </p>
        <div className="bottomcard-icons">
          <BottomCardIcons />
        </div>
      </div>
      <div className="bottomcard-right">
        <Image src="/car.webp" alt="car" width={470} height={270} />
      </div>
    </div>
  );
};

export default BottomCard;
