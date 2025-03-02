"use client";
import React from "react";
import "./customerReviews.css";
import Image from "next/image";
import { customerReviews } from "./customerReviews";
const CustomerReviews = ({ cardsContainerRef }) => {
  return (
    <div className="customer-reviews-cards" ref={cardsContainerRef}>
      {customerReviews.map((review) => (
        <div className="customer-review-card" key={review.id}>
          <Image src={review.stars} alt="star" height={26} width={137} />
          <p className="customer-review-card-para">{review.review}</p>
          <div className="customer-review-card-bottom">
            <div className="customer-review-author-detail">
              <Image src={review.avatar} alt="avatar" height={40} width={40} />
              <h3 className="customer-review-author-name">{review.name}</h3>
            </div>
            <Image
              src="/invertedComma.png"
              alt="comma"
              height={40}
              width={56}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
