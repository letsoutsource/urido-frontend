import Image from "next/image";
import "./ourPartners.css";

const OurPartners = () => {
  return (
    <div className="our-partners-container">
      <h2 className="our-partners-heading">Our Trusted Partners</h2>
      <p className="our-partners-para">
        We are proud to collaborate with industry-leading partners who share our
        commitment to excellence, reliability, & innovation. Their support helps
        us deliver exceptional service to our customers every day.
      </p>
      <div className="our-partners-logos">
        <Image
          src="/Booking.png"
          alt="Booking Partner Logo"
          width={222}
          height={76}
          className="booking-logo"
        />
        <Image
          src="/albatross.png"
          alt="Albatross Logo"
          width={206}
          height={85}
          className="albatross-logo"
        />
        <Image
          src="/Saltire.png"
          alt="Saltire Logo"
          width={191}
          height={52}
          className="saltire-logo"
        />
        <Image
          src="/DaddyCabs.png"
          alt="DaddyCabs Logo"
          width={134}
          height={120}
          className="daddy-cab-logo"
        />
        <Image
          src="/Letsoutsource.png"
          alt="LetsOutsource Logo"
          width={214}
          height={100}
          className="lets-outsource-logo"
        />
        <Image
          src="/Jstelecom.png"
          alt="Jstelecom Logo"
          width={208}
          height={55}
          className="jstelecom-logo"
        />
      </div>
    </div>
  );
};

export default OurPartners;
