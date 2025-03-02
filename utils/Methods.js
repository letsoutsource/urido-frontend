import moment from "moment";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, " ")
    .replace(",", "");
};
export const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`;
};
export const formatDateTime = (date, isTime = false) =>
  moment(date || new Date()).format(isTime ? "HH:mm" : "YYYY-MM-DD");

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
export const createBooking = async (bookingData) => {
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) throw new Error("Access token not found in cookies");
  const decodedToken = decodeToken(accessToken);
  if (!decodedToken) throw new Error("Failed to decode token");
  const userEmail = decodedToken.email;
  const phone = decodedToken.phone;
  const userName = decodedToken.userName;

  const emailData = {
    phone: phone,
    subject: "Booking Confirmation",
    bookingDetails: bookingData,
    userEmail: userEmail,
    userName: userName,
  };
  try {
    const bookingResponse = await axios.post(
      "https://urido.co.uk/api/booking/create",
      bookingData,
      {
        withCredentials: true,
      }
    );
    const emailResponse = await axios.post(
      "/frontend-api/sendBookingEmail",
      emailData,
      {
        withCredentials: true,
      }
    );
    return bookingResponse;
  } catch (error) {
    console.error("Error in createBooking:", error);
    throw error.response?.data?.message || error.message;
  }
};
