import React from "react";
import "./loginForm.css";
import Image from "next/image";
import { useForm } from "react-hook-form";

const LoginForm = ({
  onSubmit,
  isForgotPassword,
  isOtpSent,
  setIsForgotPassword,
  setIsOtpSent,
  loading,
  error,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      {!isOtpSent && (
        <div className="login-input-box">
          <Image src="/mail.png" alt="" width={22} height={22} />
          <span>|</span>
          <input
            type="text"
            className="login-input"
            placeholder="Email"
            {...register("email", { required: "Email?" })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
      )}
      {!isForgotPassword && (
        <div className="login-input-box">
          <Image src="/password.png" alt="" width={22} height={22} />
          <span>|</span>
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            {...register("password", { required: "Password?" })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
      )}

      {isForgotPassword && isOtpSent && (
        <>
          <div className="login-input-box">
            <Image src="/password.png" alt="" width={22} height={22} />
            <span>|</span>
            <input
              type="text"
              className="login-input"
              placeholder="Otp"
              {...register("otp", { required: "OTP?" })}
            />
            {errors.otp && (
              <p className="error-message">{errors.otp.message}</p>
            )}
          </div>
          <div className="login-input-box">
            <Image src="/password.png" alt="" width={22} height={22} />
            <span>|</span>
            <input
              type="password"
              className="login-input"
              placeholder="New Password"
              {...register("newPassword", {
                required: "New password?",
              })}
            />
            {errors.newPassword && (
              <p className="error-message">{errors.newPassword.message}</p>
            )}
          </div>
        </>
      )}
      
      <div className="login-forgot-box">
        <p className="login-error-message">{error}</p>
        <button
          type="button"
          className="login-forgot"
          onClick={() => {
            setIsForgotPassword((prev) => !prev);
            setIsOtpSent(false);
          }}
        >
          {isForgotPassword ? "Back to Login" : "Forgot Password?"}
        </button>
      </div>

      <button type="submit" className="login-button" disabled={loading}>
        {loading ? "Logging in..." : isForgotPassword ? (isOtpSent ? "Reset Password" : "Send OTP") : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;