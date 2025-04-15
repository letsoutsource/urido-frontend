import React from "react";
import AboutUs from "../components/aboutPageComponents/aboutUs/AboutUs";
import WhatDrivesUs from "../components/aboutPageComponents/whatDrivesUs/WhatDrivesUs";
import OurPartners from "../components/aboutPageComponents/ourPartners/OurPartners";

export const metadata = {
  title: "uRido | Let's Ride - Your Taxi In Pocket",
  description:
    "uRido provides fast, safe taxi services in Peterborough and Luton Airport transfers. Trust our 24/7 minicab service for Gatwick, Heathrow & East Midlands airports.",
  keywords: [
    "peterborough taxi company",
    "luton airport taxi service",
    "about our cabs",
    "reliable minicab service",
    "gatwick private taxi",
    "heathrow airport transfers",
    "east midlands taxi",
    "trusted cab drivers peterborough",
  ],
  openGraph: {
    title: "About Urido Taxis | Peterborough & Airport Transfer Specialists",
    description:
      "Learn about our reliable taxi services for Peterborough, Luton Airport, and nationwide transfers.",
  },
};

const AboutPage = () => {
  return (
    <main className="about-page">
      <AboutUs />
      <WhatDrivesUs />
      <OurPartners />
    </main>
  );
};

export default AboutPage;
