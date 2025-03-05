"use client";
import "./signInPopup.css";
import { useEffect, useRef } from "react";

const SignInPopup = ({ setShowSignInPopup,setIsVehicleCardOpen }) => {
  const popupRef = useRef(null);
  const handleSignInButtonClick = () => {
    setShowSignInPopup(false);
    setIsVehicleCardOpen(true)
  };

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowSignInPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="signInPopup-container">
      <div className="signInPopup-content" ref={popupRef}>
        <h4 className="signInPopup-heading">Sign In to Book Your Ride!</h4>
        <p className="signInPopup-para">
          Not ready to sign in? No problem! You can book as a guest 
        </p>
        <button
          className="signInPopup-button"
          onClick={handleSignInButtonClick}
        >
          Book As Guest
        </button>
      </div>
    </div>
  );
};

export default SignInPopup;
