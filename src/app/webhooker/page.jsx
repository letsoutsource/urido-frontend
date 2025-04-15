"use client";
import React from "react";

const WebBooker = () => {
  return (
    <div className="webbooker-container">
      <iframe
        src="https://urido.webbooker.icabbi.com/"
        title="uRido Web Booker"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "100vh" }}
      />
    </div>
  );
};

export default WebBooker;
