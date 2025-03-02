import Image from "next/image";
import "./home.css";
import React from "react";
import BookingCard from "./bookingCard/BookingCard";
function HomePage() {
  return (
    <>
      <Image
        alt="background img"
        src="/homeBackground.jpg"
        height={765}
        width={1200}
        className="homebackground-image"
      />
      <BookingCard />
    </>
  );
}

export default HomePage;
