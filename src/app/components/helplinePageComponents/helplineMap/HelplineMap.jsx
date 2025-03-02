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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11693.993944003813!2d-0.24801917919235763!3d52.5914851621283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877bc5d04dfd6f9%3A0x321cd775407dbb27!2s282%20Cromwell%20Road%2C%20Peterborough%2C%20England%2C%20PE1%202HR!5e0!3m2!1sen!2s!4v1738633695694!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default HelplineMap;
