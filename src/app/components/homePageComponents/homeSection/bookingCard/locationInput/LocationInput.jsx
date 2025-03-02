"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./locationInput.css";
import useSuggestions from "./useSuggestion";
import useCurrentLocation from "./useCurrentLocation";
import SuggestionsList from "./suggestionList";

const LocationInput = ({
  icon,
  placeholder,
  value,
  onChange,
  onSelect,
  ...rest
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputWrapperRef = useRef(null);
  const { suggestions, isLoading } = useSuggestions(value, showSuggestions);
  const { handleUseCurrentLocation, isLoading: isLocationLoading } =
    useCurrentLocation();
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
    setShowSuggestions(true);
  };
  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion);
    onSelect(suggestion);
    setShowSuggestions(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputWrapperRef.current &&
        !inputWrapperRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="location-input-wrapper" ref={inputWrapperRef}>
      <Image src={icon} alt="location icon" height={24} width={24} />
      <span className="input-divider">|</span>
      <input
        type="text"
        placeholder={placeholder}
        className="location-booking-input"
        value={value || ""}
        onChange={handleInputChange}
        {...rest}
      />
      {showSuggestions && (
        <SuggestionsList
          suggestions={suggestions}
          isLoading={isLoading || isLocationLoading}
          handleUseCurrentLocation={() =>
            handleUseCurrentLocation(onChange, onSelect)
          }
          handleSuggestionClick={handleSuggestionClick}
        />
      )}
      
      {isLoading && (
        <div className="spinner">
          <Image
            src="/spinner.gif"
            alt="Loading..."
            height={35}
            width={35}
            className="spinner-gif"
          />
        </div>
      )}
    </div>
  );
};

export default LocationInput;
