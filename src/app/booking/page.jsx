import React from "react";

const BookingPage = () => {
  const bookingPageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "#ffffff",
    maxWidth: "1200px",
    margin: "auto",
    boxSizing: "border-box",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "900px",
    width: "100%",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginBottom: "50px",
  };

  const infoStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const infoHeadingStyle = {
    fontSize: "32px",
    color: "#333",
    fontWeight: "500",
    marginBottom: "20px",
  };

  const infoDescriptionStyle = {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto",
  };

  return (
    <div style={bookingPageStyle}>
      <div style={contentStyle}>
        <div style={infoStyle}>
          <h2 style={infoHeadingStyle}>Get Ready to Book Your Ride!</h2>
          <p style={infoDescriptionStyle}>
            Our new booking platform will be available soon. Stay tuned and be
            the first to book your next journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
