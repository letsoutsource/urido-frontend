"use client";
import "./helplineFormSection.css";
import HelplineInformationCard from "./helpLineInformationCard/HelplineInformationCard";
import HelplineForm from "./helpLineForm/HelplineForm";
import Head from "next/head";
const HelplineFormSection = () => {
  return (
    <>
      <Head>
        <title>
          24/7 Taxi Helpline | Peterborough & Luton Airport Taxi Support
        </title>
        <meta
          name="description"
          content="Need help with your Peterborough taxi booking or Luton Airport transfer? Contact our 24/7 helpline for instant support on minicabs, airport taxis, and private hires."
        />
        <meta
          name="keywords"
          content="peterborough taxi helpline, luton airport taxi contact, taxi support peterborough, 24/7 cab assistance, taxi customer service luton"
        />
      </Head>
      <div className="helpline-form-container">
        <div className="helpline-details-section">
          <h2 className="helpline-heading">Helpline</h2>
          <span className="helpline-bottomline-1"></span>
          <span className="helpline-bottomline-2"></span>
          <p className="helpline-para">
            Get in touch with us! Use the form below to submit your issue, find
            our contact details and <br /> address, or view the map of our
            headquarters for easy navigation.
          </p>
        </div>
        <div className="helpline-form-section">
          <HelplineInformationCard className="helpline-information-card" />
          <HelplineForm />
        </div>
      </div>
    </>
  );
};
export default HelplineFormSection;
