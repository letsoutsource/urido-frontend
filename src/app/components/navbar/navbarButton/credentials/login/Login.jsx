"use client";
import React, { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import {
  authenticateUser,
  handleAuthentication,
} from "../../../../../../../services/authService";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import LoginForm from "./loginForm/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    if (isForgotPassword) {
      if (isOtpSent) {
        try {
          const response = await axios.post(
            "https://api.urido.co.uk/user/verify-reset-password",
            data,
            { withCredentials: true }
          );
          const accessToken = response.data.data.accessToken;
          if (response.data.data.accessToken) {
            Cookies.set("accessToken", accessToken, {
              expires: 1,
              secure: true,
              sameSite: "None",
            });
          }
          toast.success("Your password has been successfully reset.");
          handleAuthentication(dispatch, accessToken);
          setIsForgotPassword(false);
          setIsOtpSent(false);
        } catch (error) {
          setError("Error resetting your password.");
          toast.error("Error resetting your password.");
          console.log("Error resetting password:", error);
        }
      } else {
        try {
          await axios.post(
            "https://api.urido.co.uk/user/forgot-password",
            data
          );
          toast.success("OTP has been sent to your email.");
          setIsOtpSent(true);
        } catch (error) {
          setError("Error sending reset password OTP.");
          toast.error("Error sending reset password OTP.");
          console.log("Error sending OTP:", error);
        }
      }
    } else {
      try {
        const accessToken = await authenticateUser(
          "https://api.urido.co.uk/user/login",
          data
        );
        handleAuthentication(dispatch, accessToken);
        toast.success("Logged In Successfully");
      } catch (error) {
        setError("Invalid email or password.");
        console.error("Error logging in:", error);
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-container-header">
        <h4 className="login-heading">
          {isForgotPassword
            ? isOtpSent
              ? "Enter OTP"
              : "Forgot Password"
            : "Welcome Back!"}
        </h4>
        <p className="login-para">
          {isForgotPassword
            ? isOtpSent
              ? "Enter the OTP sent to your email and your new password."
              : "Enter your email to reset your password."
            : "Sign in to access your account & manage your bookings."}
        </p>
      </div>

      <LoginForm
        onSubmit={onSubmit}
        isForgotPassword={isForgotPassword}
        isOtpSent={isOtpSent}
        setIsForgotPassword={setIsForgotPassword}
        setIsOtpSent={setIsOtpSent}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Login;
