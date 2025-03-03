"use client";
import Image from "next/image";
import "./profilePopUp.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import axios from "axios";
import { hide } from "@/store/slices/credentialsSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const ProfilePopUp = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const [profilePic, setProfilePic] = useState("/profilePic.png");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://api.urido.co.uk/user/current",
          {
            withCredentials: true,
          }
        );
        const userData = response.data.data;
        setProfilePic(userData?.profilePic || "/profilePic.png");
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated, setProfilePic]);

  const handleSignOutClick = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
        console.error("No access token found in cookies");
        return;
      }
      await axios.get("https://api.urido.co.uk/user/logout", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      Cookies.remove("accessToken");
      dispatch(logout());
      dispatch(hide());
    } catch (error) {
      console.error("Error logging in:", error.response || error.message);
    }
  };
  return (
    <div className="navbarProfile-container">
      <Image
        src="/polygon-transparent.png"
        alt="polygon"
        width={34}
        height={34}
        className="profile-polygon"
      />
      <div className="navbarProfile-user-details">
        {profilePic && (
          <Image
            src={profilePic}
            width={135}
            height={135}
            alt="dp"
            className="navbarProfile-user-profile"
            priority
          />
        )}
        <h5 className="navbarProfile-user-name">{user?.userName}</h5>
        <h6 className="navbarProfile-user-email">{user?.email}</h6>
      </div>
      <div className="navbarProfile-buttons">
        <Link className="navbarProfile-editButton-div" href="/edit">
          <Image src="/edit-user.png" width={28} height={28} alt="edit" />
          <button className="navbarProfile-edit-button">Edit Profile</button>
        </Link>
        <button
          className="navbarProfile-signOut-button"
          onClick={handleSignOutClick}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePopUp;
