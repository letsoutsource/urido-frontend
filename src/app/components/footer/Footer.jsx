"use client";
import Image from "next/image";
import "./footer.css";
import FacebookLogo from "@/assets/Svg/fb";
import InstagramLogo from "@/assets/Svg/insta";
import LinkedinIcon from "@/assets/Svg/linkedin";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerLinks, officeLocations } from "./footerData";
const Footer = () => {
  const path = usePathname();
  const isActive = (href) => path === href;
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-description">
          <div className="footer-description-top">
            <Image src="/uridowhite.png" width={135} height={35} alt="uRido"/>
            <p className="footer-description-paragraph">
              Offering reliable and convenient taxi services tailored for your
              travel needs. Whether it’s a quick ride across town or a
              long-distance journey, uRido ensures safety, comfort, and timely
              pickups to make every trip stressfree & enjoyable.
            </p>
          </div>
          <div className="footer-description-bottom">
            <h3 className="footer-followUs-heading">Follow Us</h3>
            <div className="footer-social-icons">
              <FacebookLogo />
              {/* <InstagramLogo /> */}
              <LinkedinIcon />
            </div>
          </div>
        </div>
     

        <div className="footer-links">
          <h5 className="footer-links-heading">Links</h5>
          <ul className="footer-links-list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? "active-link" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-location">
          <h5 className="footer-location-heading">Office</h5>
          {officeLocations.map((location, index) => (
            <div key={index} className="footer-location-address">
              <h2 className="footer-location-headOffice">{location.title}</h2>
              <p className="footer-location-address-line">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        alt="cross"
        src="/crossRoad.jpg"
        width={1423}
        height={20}
        className="footer-crossroad-image"
      />
    </footer>
  );
};

export default Footer;
