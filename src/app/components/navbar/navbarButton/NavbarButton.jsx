"use client";
import { FaUserAlt } from "react-icons/fa";
import Credentials from "./credentials/Credentials";
import ProfilePopUp from "./profilePopUp/ProfilePopUp";
import "./navbarButton.css";
import { hide, toggle } from "../../../../store/slices/credentialsSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
const NavbarButton = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const router = useRouter()
  const { user } = useSelector((state) => state.auth);
  const { showCredentials } = useSelector((state) => state.credentials);
  // const buttonText = isLoggedIn ? user.userName : "Sign In";
  const buttonClass = isLoggedIn
    ? "myProfile-navbar-button"
    : "signIn-navbar-button";
  const PopupComponent = isLoggedIn ? ProfilePopUp : Credentials;
  const orangeButtonBg =
    path === "/mybooking" || path === "/help" || path === "/edit" || path === "/payment" || path === '/booking';

  const handleButtonClick = () => {
    router.push('/booking')
    // dispatch(toggle());
  };
  useEffect(() => {
    dispatch(hide());
  }, [path, dispatch]);
  return (
    <>
      <button
        className={buttonClass}
        onClick={handleButtonClick}
        style={{
          backgroundColor: orangeButtonBg && isLoggedIn ? "#f9b443" : "",
        }}
      >
        {/* <FaUserAlt /> */}
        Book Now
        {/* {buttonText} */}
      </button>
      {showCredentials && (
        <div className="credentials-popup">
          <PopupComponent />
        </div>
      )}
    </>
  );
};

export default NavbarButton;
