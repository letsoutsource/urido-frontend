"use client";
import { useState } from "react";
import "./credentials.css";
import Login from "./login/Login";
import Register from "./register/Register";
import Image from "next/image";

const Credentials = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="credentials-container">
      <Image
        src="/polygon-white.png"
        alt="polygon"
        width={34}
        height={34}
        className="credentials-polygon"
      />
      <div className="credentials-tabs">
        <button
          className={`credentials-tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Sign In
        </button>
        <button
          className={`credentials-tab ${
            activeTab === "register" ? "active" : ""
          }`}
          onClick={() => setActiveTab("register")}
        >
          Sign Up
        </button> 
      </div>
      {activeTab === "login" && <Login />}
      {activeTab === "register" && <Register />}
    </div>
  );
};

export default Credentials;
