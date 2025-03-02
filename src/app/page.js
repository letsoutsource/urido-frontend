import CustomerReviewsSection from "./components/homePageComponents/customerReviewsSection/CustomerReviewsSection";
import HoldUpSection from "./components/homePageComponents/holdUpSection/HoldUpSection";
import HomePage from "./components/homePageComponents/homeSection/Home";
import HowDoesItWork from "./components/homePageComponents/howDoesItWorkSection/HowDoesItWork";
import VehicleListSection from "./components/homePageComponents/vehiclesListSection/VehicleListSection";
import WhatSpecialAboutUs from "./components/homePageComponents/whatSpecialAboutUsSection/WhatSpecialAboutUs";

export default function Home() {
  return (
    <>
      <HomePage />
      <WhatSpecialAboutUs />
      <CustomerReviewsSection />
      <HowDoesItWork/>
      <VehicleListSection />
      <HoldUpSection />
    </>
  );
}
