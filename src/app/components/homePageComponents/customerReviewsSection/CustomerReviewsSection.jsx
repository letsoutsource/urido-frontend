"use client";
import "./customerReviewsSection.css";
import { useRef } from "react";
import CustomerReviewsArrow from "./customerReviewsArrow/CustomerReviewsArrow";
import  CustomerReviews from "./customerReviews/CustomerReviews.jsx"
const CustomerReviewsSection = () => {
  const cardsContainerRef = useRef(null);
  const scroll = (direction) => {
    if (cardsContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      cardsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="customer-reviews-container">
      <h1 className="customer-reviews-head">Our Customer Reviews</h1>
      <h1 className="customer-reviews-para">
        Urido is trusted by the fastest-growing companies in the taxi service
        industry, focusing on providing affordable and reliable cab
        solutions. Here’s what they have to say about us.
      </h1>
      <CustomerReviews scroll={scroll} cardsContainerRef={cardsContainerRef} />
      <CustomerReviewsArrow scroll={scroll} />
    </div>
  );
};

export default CustomerReviewsSection;
