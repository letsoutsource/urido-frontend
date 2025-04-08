import React from "react";
import {
  FaMapMarkedAlt,
  FaPlane,
  FaTaxi,
  FaPhone,
  FaClock,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";
import "./coverageArea.css";
import { airports, regions } from "./coverageArea";
import Link from "next/link";

const CoverageAreaPage = () => {
  return (
    <div className="coverage-area-container">
      <div className="coverage-area-main-container">
        <div className="coverage-area-hero-section">
          <div className="coverage-area-hero-icon">
            <FaMapMarkedAlt size={300} />
          </div>
          <h1 className="coverage-area-hero-heading">uRido Coverage Areas</h1>
          <p className="coverage-area-hero-subheading">
            Reliable taxi services across major UK airports and cities. Book
            your journey with uRido for a smooth travel experience.
          </p>
          <div className="coverage-area-button-container">
            <Link className="primary-link" href="/booking">
              <FaPhone size={16} /> Book Now
            </Link>
            <Link className="secondary-link" href="/about">
              <FaInfoCircle size={16} /> About Us
            </Link>
          </div>
        </div>
        <section className="coverage-area-section">
          <div className="coverage-area-section-title-container">
            <FaPlane size={28} className="section-icon" />
            <h2 className="coverage-area-section-title">Airport Coverage</h2>
          </div>
          <p className="coverage-area-section-description">
            uRido provides reliable taxi services to and from all major UK
            airports. Pre-book your airport transfer and enjoy a stress-free
            journey.
          </p>

          <div className="coverage-area-grid-container">
            {airports.map((airport, index) => (
              <div
                key={index}
                className={`airport-card ${airport.isPopular ? "popular" : ""}`}
              >
                <div className="card-header">
                  <div>
                    <h3 className="airport-name">{airport.name}</h3>
                    <p className="airport-location">
                      {airport.cities.join(", ")}
                    </p>
                  </div>
                  <span className="airport-code">{airport.code}</span>
                </div>
                {airport.isPopular && (
                  <span className="popular-badge">Popular Destination</span>
                )}
                <div className="card-footer">
                  <span className="service-time">
                    <FaClock size={14} /> 24/7 Service
                  </span>
                  <a href="#" className="book-link">
                    Book Transfer <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="coverage-area-section">
          <div className="coverage-area-section-title-container">
            <FaTaxi size={28} className="coverage-area-section-icon" />
            <h2 className="coverage-area-section-title">
              City & Regional Coverage
            </h2>
          </div>
          <p className="coverage-area-section-description">
            Beyond airports, uRido provides excellent taxi services across major
            UK cities and regions. Count on us for all your urban and inter-city
            transportation needs.
          </p>

          <div className="coverage-area-regions-container">
            <h3 className="coverage-area-regions-heading">Regions We Cover</h3>
            <div className="coverage-area-regions-wrapper">
              {regions.map((region, index) => (
                <span key={index} className="coverage-area-region-tag">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoverageAreaPage;
