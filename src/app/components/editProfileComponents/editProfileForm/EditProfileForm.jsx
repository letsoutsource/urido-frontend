"use client";
import axios from "axios";
import "./editProfileForm.css";
import InputField from "./inputFields/InputField";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { initializeUser } from "../../../../../services/authService";
const EditProfileForm = ({ register, handleSubmit }) => {
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        "https://urido.co.uk/api/user/update",
        data,
        {
          withCredentials: true,
        }
      );
      initializeUser(dispatch);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Error updating profile. Please try again.");
    }
  };
  return (
    <div className="editProfile-formBox">
      <form className="editProfile-inputs" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          name="userName"
          iconSrc="/user.png"
          register={register}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          iconSrc="/mail.png"
          register={register}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          iconSrc="/password.png"
          register={register}
        />
        <InputField
          label="Phone"
          name="phone"
          type="tel"
          iconSrc="/call-black.png"
          register={register}
        />
        <button type="submit" className="editProfile-button">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
