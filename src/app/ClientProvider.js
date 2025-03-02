"use client";

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeUser } from "../../services/authService";

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ClientInitializer>
        {children}
      </ClientInitializer>
      <ToastContainer position="bottom-left" />
    </Provider>
  );
};

const ClientInitializer = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    initializeUser(dispatch);
  }, [dispatch]);

  return <>{children}</>;
};

export default ClientProvider;
