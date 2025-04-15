"use client";
import "./helplineMap.css";

const HelplineMap = () => {
  return (
    <div className="helpline-map-container">
      <h2 className="helpline-map-heading">Find Us Here</h2>
      <p className="helpline-map-para">
        Easily locate us on the map and stay connected! Whether you have
        questions, need assistance, or want to visit, our location is just a
        click away.
      </p>
      <div className="helpline-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.4604418702933!2d-0.22252318423294463!3d52.58570357982385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877bc6d1b10422d%3A0xb1d0127b2d399103!2sNorthey%20House%2C%20Oxney%20Rd%2C%20Peterborough%20PE1%205YW%2C%20UK!5e0!3m2!1sen!2s!4v1713181136973!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default HelplineMap;
