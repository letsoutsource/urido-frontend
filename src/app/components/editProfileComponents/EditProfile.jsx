"use client";
import "./editProfile.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import EditProfileForm from "./editProfileForm/EditProfileForm";
import UploadImage from "./uploadImage/UploadImage";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const EditProfile = () => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
    } else {
      const timeoutId = setTimeout(() => {
        if (!isAuthenticated) {
          router.push("/");
        }
        setLoading(false);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://api.urido.co.uk/user/current", {
          withCredentials: true,
        });
        const userData = response.data.data;
        setProfilePic(userData.profilePic);
        setValue("userName", userData.userName);
        setValue("email", userData.email);
        setValue("phone", userData.phone);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated, setValue, setProfilePic]);

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="editProfile-container">
      <UploadImage profilePic={profilePic} setProfilePic={setProfilePic} />
      <EditProfileForm register={register} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditProfile;
