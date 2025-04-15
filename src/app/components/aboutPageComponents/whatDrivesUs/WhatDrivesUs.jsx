import "./whatDrivesUs.css";
import Image from "next/image";
import { cardsData } from "./cardsData";

const WhatDrivesUs = () => {
  return (
    <section className="what-drives-us-container" aria-label="Our taxi service values">
      <div className="what-drives-us-content">
        <h2 className="what-drives-us-heading">Why Choose Our Taxi Service</h2>
        <div className="what-drives-us-cards">
          {cardsData.map((card) => (
            <div key={card.id} className="what-drives-us-card">
              <Image
                src={card.icon}
                alt={`${card.heading} for premium taxi service`}
                width={card.width}
                height={card.height}
                className="what-drives-us-icon"
                loading="lazy"
              />
              <h3 className="what-drives-us-card-heading">{card.heading}</h3>
              <span className="what-drives-us-card-line"></span>
              <p className="what-drives-us-card-para">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;