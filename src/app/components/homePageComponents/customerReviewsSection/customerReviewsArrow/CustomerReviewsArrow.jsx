"use client";
import Image from "next/image";
import React from "react";
import "./customerReviewsArrow.css";

const CustomerReviewsArrow = ({ scroll }) => {
  return (
    <div className="customer-reviews-arrows">
      <Image
        src="/leftArrow.png"
        alt="left arrow"
        height={60}
        width={60}
        onClick={() => scroll("left")}
        style={{ cursor: "pointer" }}
      />
      <Image
        src="/rightArrow.png"
        alt="right arrow"
        height={60}
        width={60}
        onClick={() => scroll("right")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default CustomerReviewsArrow;
