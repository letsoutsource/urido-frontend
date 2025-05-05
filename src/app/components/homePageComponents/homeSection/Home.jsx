import Image from "next/image";
import { FaPhoneAlt, FaTaxi } from "react-icons/fa";
import "./home.css";
import Link from "next/link";

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="background-container">
        <Image
          alt="background img"
          src="/homeBackground.webp"
          width={1920}
          height={1024}
          className="homebackground-image"
          priority
          decoding="async"
        />
      </div>
      <div className="homepage-hero-section">
        <div className="homepage-hero-content">
          <h1>Your Ride, sorted!</h1>
          <p>Reliable, Comfortable, and Best Cab Solution anywhere in the UK</p>
          <div className="phone-banner">
            <FaPhoneAlt className="phone-banner-icon" />
            <a href="tel:01733201000" className="phone-banner-number">
              01733 201000
            </a>
          </div>
          <div className="homepage-hero-buttons">
            <Link
              href="https://urido.webbooker.icabbi.com/"
              target="_self"
              className="btn-primary"
            >
              <FaTaxi /> Book Now
            </Link>
            <Link href="/help" className="btn-secondary">
              <FaPhoneAlt /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
