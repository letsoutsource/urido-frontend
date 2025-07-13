"use client"
import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaTaxi } from "react-icons/fa";
import "./home.css";
import Link from "next/link";
import { useEffect } from "react";

const HomePage = React.memo(() => {
  useEffect(() => {
    const preloadImages = () => {
      const images = [
        '/homeBackground.webp',
        '/logo.png'
      ];
      images.forEach(imgSrc => {
        const img = new Image();
        img.src = imgSrc;
      });
    };
    preloadImages();
  }, []);

  return (
    <div className="homepage-container">
      <div className="background-container">
        <Image
          alt="Premium taxi service background"
          src="/homeBackground.webp"
          width={1920}
          height={1024}
          className="homebackground-image"
          priority
          decoding="async"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="homepage-hero-section">
        <div className="homepage-hero-content">
          <h1>Your Ride, sorted!</h1>
          <p>Reliable, Comfortable, and Best Cab Solution anywhere in the UK</p>
          <div className="phone-banner">
            <FaPhoneAlt aria-hidden="true" className="phone-banner-icon" />
            <a 
              href="tel:01733201000" 
              className="phone-banner-number"
              aria-label="Call us on 01733 201000"
            >
              01733 201000
            </a>
          </div>
          <div className="homepage-hero-buttons">
            <Link
              href="https://urido.webbooker.icabbi.com/"
              target="_self"
              className="btn-primary"
              rel="noopener noreferrer"
              aria-label="Book your taxi now"
            >
              <FaTaxi aria-hidden="true" /> Book Now
            </Link>
            <Link 
              href="/help" 
              className="btn-secondary"
              aria-label="Contact us for more information"
            >
              <FaPhoneAlt aria-hidden="true" /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
