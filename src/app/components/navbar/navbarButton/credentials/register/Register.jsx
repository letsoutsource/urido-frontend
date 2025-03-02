"use client";
import Image from "next/image";
import "./register.css";
import { inputFields } from "./inputFields";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  authenticateUser,
  handleAuthentication,
} from "../../../../../../../services/authService";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const accessToken = await authenticateUser(
        "https://urido.co.uk/api/user/register",
        data,
        { withCredentials: true }
      );
      handleAuthentication(dispatch, accessToken);
      toast.success("You Are Now User Of Urido");
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error registering user:", error);
    }
    setLoading(false);
  };

  return (
    <div className="register-container">
      <div className="register-container-header">
        <h4 className="register-heading">Welcome!</h4>
        <p className="register-para">
          Create an account to book and manage rides effortlessly.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        {inputFields.map((field, index) => (
          <div key={index} className="register-input-box">
            <Image src={field.icon} alt="" width={22} height={22} />
            <span>|</span>
            <input
              type={field.placeholder === "Password" ? "password" : "text"}
              className="register-input"
              placeholder={field.placeholder}
              {...register(field.name, {
                required: `${field.placeholder}?`,
              })}
            />
            {errors[field.name] && (
              <p className="error-message">{errors[field.name].message}</p>
            )}
          </div>
        ))}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="register-rememberme-box">
          <p className="register-rememberme">Remember me:</p>
          <input type="checkbox" className="register-checkbox" />
        </div>
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? "Registering..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Register;