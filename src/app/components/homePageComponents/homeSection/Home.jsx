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
          src="/homeBackground.jpg"
          width={100}
          height={100}
          className="homebackground-image"
        />
      </div>
      <div className="homepage-hero-section">
        <div className="homepage-hero-content">
          <h1>Premium Taxi Service</h1>
          <p>
            Reliable, comfortable, and prompt transportation anywhere in the
            city
          </p>
          <div className="homepage-hero-buttons">
            <Link href="/booking" className="btn-primary">
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
