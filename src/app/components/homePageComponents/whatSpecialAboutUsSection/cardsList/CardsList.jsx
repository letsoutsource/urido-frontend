import React from "react";
import "./cardList.css";
import { specialAboutUsCards } from "./cardsListData";
import Image from "next/image";

const CardList = () => {
  return (
    <div className="specialaboutus-cards">
      {specialAboutUsCards.map(({ id, heading, description, Icon, MobileIcon }) => (
        <div key={id} className="specialaboutus-card">
          <h4 className="specialaboutus-card-head">{heading}</h4>
          <p className="specialaboutus-card-para">{description}</p>
          {/* Desktop Icon */}
          <Image
            src={Icon.src}
            width={Icon.width}
            height={Icon.height}
            alt="icon"
            className="specialaboutus-card-largeScreenIcon"
          />
          
          {/* Mobile Icon */}
          <div className="specialaboutus-card-mobileIcon">
            <Image
              src={MobileIcon.src}
              width={MobileIcon.width}
              height={MobileIcon.height}
              alt="icon"
            />
          </div>
        </div>
      ))}
      <div className="specialaboutus-mobileView-card">
        <h4 className="specialaboutus-card-head" style={{ marginTop: "5px" }}>
          Nation Wide
        </h4>
        <p className="specialaboutus-card-para">
          Your trusted ride, no matter where you are. It's nationwide.
        </p>
         <Image src="/car.png" alt="car" width={100} height={90} className="specialaboutus-car"/>
      </div>
    </div>
  );
};

export default CardList;