import "./whatDrivesUs.css";
import Image from "next/image";
import { cardsData } from "./cardsData";
const WhatDrivesUs = () => {
  return (
    <div className="what-drives-us-container">
      <div className="what-drives-us-content">
        <h2 className="what-drives-us-heading">What Drives Us</h2>
        <div className="what-drives-us-cards">
          {cardsData.map((card) => (
            <div key={card.id} className="what-drives-us-card">
              <Image
                src={card.icon}
                alt={card.heading}
                width={card.width}
                height={card.height}
                className="what-drives-us-icon"
              />
              <h4 className="what-drives-us-card-heading">{card.heading}</h4>
              <span className="what-drives-us-card-line"></span>
              <p className="what-drives-us-card-para">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatDrivesUs;
