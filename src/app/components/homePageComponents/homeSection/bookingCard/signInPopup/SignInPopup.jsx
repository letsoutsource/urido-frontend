"use client";
import { useDispatch } from "react-redux";
import "./signInPopup.css";
import { toggle } from "@/store/slices/credentialsSlice";
import { useEffect, useRef } from "react";

const SignInPopup = ({ setShowSignInPopup }) => {
  const dispatch = useDispatch();
  const popupRef = useRef(null);

  const handleSignInButtonClick = () => {
    setShowSignInPopup(false);
    dispatch(toggle());
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
          Create an account or log in to book your ride and access all features.
        </p>
        <button
          className="signInPopup-button"
          onClick={handleSignInButtonClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInPopup;
