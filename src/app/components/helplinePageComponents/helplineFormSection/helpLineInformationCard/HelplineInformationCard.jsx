import React from "react";
import Image from "next/image";
import "./helplineInformationCard.css";
import { contactDetails } from "../helpLineData";
const HelplineInformationCard = () => {
  return (
    <div className="helpline-information-card">
      <h4 className="information-card-header">Contact Information</h4>
      {contactDetails.map((contactInfo, index) => (
        <div className="information-card-row" key={index}>
          <Image src={contactInfo.icon} alt="icon" height={18} width={18} className="helpline-information-card-icon"/>
          <p>{contactInfo.details}</p>
        </div>
      ))}
    </div>
  );
};
export default HelplineInformationCard;
