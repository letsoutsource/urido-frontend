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
import Head from "next/head";

const CoverageAreaPage = () => {
  return (
    <>
      <Head>
        <title>Coverage Areas | uRido Taxi Service</title>
        <meta
          name="description"
          content="Explore uRido's extensive coverage across UK airports and cities. Book affordable airport transfers, executive car services, and taxis from Luton, Heathrow to Peterborough, and more."
        />
        <meta
          name="keywords"
          content="airport transfers, Luton airport taxi, Heathrow to Peterborough taxi, cheap Peterborough taxi, executive car services, Peterborough taxi service"
        />
      </Head>

      <div className="coverage-area-container">
        <div className="coverage-area-main-container">
          <div className="coverage-area-hero-section">
            <div className="coverage-area-hero-icon">
              <FaMapMarkedAlt size={300} />
            </div>
            <h1 className="coverage-area-hero-heading">uRido Coverage Areas</h1>
            <p className="coverage-area-hero-subheading">
              Reliable taxi services, airport transfers, and executive cab
              services across major UK airports and local areas. Book your
              journey with uRido for smooth travel experience.
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
              uRido provides reliable airport transfers and executive taxi
              services to and from all major airports. Pre-book your ride and
              enjoy a smooth, comfortable, and stress-free travel experience.
            </p>

            <div className="coverage-area-grid-container">
              {airports.map((airport, index) => (
                <div
                  key={index}
                  className={`airport-card ${
                    airport.isPopular ? "popular" : ""
                  }`}
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
              Beyond airports transafers, uRido offers excellent taxi services, executive
              car services, and cheap taxi options for your everyday travel.
              Count on us for all your urban and inter-city transportation
              needs.
            </p>

            <div className="coverage-area-regions-container">
              <h3 className="coverage-area-regions-heading">
                Regions And Local Areas We Cover
              </h3>
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
    </>
  );
};

export default CoverageAreaPage;
