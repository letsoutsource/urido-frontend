import BottomCard from "./bottomCard/BottomCard";
import CardList from "./cardsList/CardsList";
import "./whatSpecialAboutUs.css";
const WhatSpecialAboutUs = () => {
  return (
    <div className="specialaboutus-container">
      <h2 className="specialaboutus-heading">What Special About Us</h2>
      <CardList />
      <BottomCard />
      </div>
  );
};

export default WhatSpecialAboutUs;
