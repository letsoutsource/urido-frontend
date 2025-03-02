import axios from "axios";
import Cookies from "js-cookie";
import { login } from "@/store/slices/authSlice";
import { hide } from "@/store/slices/credentialsSlice";
import { decodeToken } from "../utils/Methods";

export const authenticateUser = async (endpoint, data) => {
  try {
    await axios.post(endpoint, data, { withCredentials: true });
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) throw new Error("Access token not found in cookies");
    return accessToken;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const handleAuthentication = (dispatch, accessToken) => {
  const decodedToken = decodeToken(accessToken);
  if (!decodedToken) throw new Error("Failed to decode token");
  dispatch(login(decodedToken));
  dispatch(hide());
};

export const initializeUser = (dispatch) => {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    const decodedToken = decodeToken(accessToken);
    if (decodedToken) {
      dispatch(login(decodedToken));
    }
  }
};
