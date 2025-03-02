"use client";
import React from "react";
import Image from "next/image";
import "./luggageInput.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

const LuggageDropdown = ({ control, name }) => {
  return (
    <div className="luggage-dropdown-wrapper">
      <Image
        src="/luggage.png"
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
            inputProps={{ "aria-label": "Luggage selection" }}
            className="luggage-select"
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                className: "luggage-menu-paper",
              },
            }}
            renderValue={(selected) =>
              selected === "" ? (
                <span className="luggage-placeholder">Luggage</span>
              ) : (
                selected
              )
            }
          >
            {Array.from({ length: 17 }, (_, i) => (
              <MenuItem key={i} value={i} className="luggage-options">
                {i}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default LuggageDropdown;
