import Image from "next/image";
import "./ourPartners.css";

const OurPartners = () => {
  return (
    <div className="our-partners-container">
      <h2 className="our-partners-heading">Our Trusted Partners</h2>
      <p className="our-partners-para">
  We partner with premium transport providers to enhance our 24/7 taxi services, 
  ensuring reliable airport transfers and comfortable minicab solutions. Together 
  we deliver exceptional private hire experiences with professional drivers.
</p>
      <div className="our-partners-logos">
        <Image
          src="/Booking.webp"
          alt="Heathrow Booking Partner Cheap Taxi"
          width={222}
          height={76}
          className="booking-logo"
        />
         <Image
          src="/cmac.webp"
          alt="Peterboroguh Cheap Affordable CMAC Group Taxi"
          width={208}
          height={120}
          className="cmac-logo"
        />
       
        <Image
          src="/groundscope.webp"
          alt="Luton to london Groundscope Taxi"
          width={161}
          height={52}
          className="groundscope-logo"
        />
        <Image
          src="/DaddyCabs.webp"
          alt="Best Lutton DaddyCabs Taxi Service"
          width={134}
          height={120}
          className="daddy-cab-logo"
        />
        <Image
          src="/Letsoutsource.webp"
          alt="Urgent LetsOutsource Taxi"
          width={214}
          height={100}
          className="lets-outsource-logo"
        />
        <Image
          src="/albatross.webp"
          alt="Heathrow Luton airport Albatross airport transfers"
          width={200}
          height={85}
          className="albatross-logo"
        />
      </div>
    </div>
  );
};

export default OurPartners;
