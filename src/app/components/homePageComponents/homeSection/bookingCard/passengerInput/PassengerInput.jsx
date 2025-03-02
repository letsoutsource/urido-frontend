"use client";
import React from "react";
import Image from "next/image";
import "./passengerInput.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

const PassengerInput = ({ control, name }) => {
  return (
    <div className="passenger-dropdown-wrapper">
      <Image
        src="/passenger.png"
        alt="icon"
        height={24}
        width={24}
        className="dropdown-icon"
      />
      <span className="dropdown-divider">|</span>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            displayEmpty
            inputProps={{ "aria-label": "Passenger selection" }}
            className="passenger-select"
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                className: "passenger-menu-paper",
              },
            }}
            renderValue={(selected) =>
              selected === "" ? (
                <span className="passenger-placeholder">Passenger</span>
              ) : (
                selected
              )
            }
          >
            {Array.from({ length: 16 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1} className="passenger-options">
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default PassengerInput;