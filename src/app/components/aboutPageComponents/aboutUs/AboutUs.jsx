import Image from "next/image";
import "./aboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <Image
        src="/aboutUsBackground.webp"
        height={781}
        width={1441}
        alt="aboutUs"
        className="aboutUs-image"
      />
      <h2 className="aboutUs-heading">About Us</h2>
      <span className="aboutUs-bottomline-1"></span>
      <span className="aboutUs-bottomline-2"></span>

      <div className="aboutUs-card">
        <h4 className="aboutUs-card-heading">
          Driven to Get You There <span>Fast, Safe, Reliable.</span>
        </h4>

        <div className="aboutUs-card-div1">
          <span className="decorater-letter">A</span>
          <p className="aboutUs-card-para1">
            t Urido,we’re more than just a taxi cab runner we’re your partner
            <span>
              , committed to making every journey smooth, safe,and cheap.
            </span>
            <br />
          </p>
        </div>

        <p className="aboutUs-card-para2">
          With a user-friendly platform and a fleet of cab drivers, we bring
          convenience, urgent taxi to your fingertips.Whether  a
          urgent ride across town or a airport transfers, our focus is on
          delivering exceptional service that meets your needs and exceeds your
          expectations.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join thousands of satisfied riders who
          trust uRido for their everyday travel. Experience a smarter way to
          move with comfort, safety, and efficiency at the heart of every ride.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
