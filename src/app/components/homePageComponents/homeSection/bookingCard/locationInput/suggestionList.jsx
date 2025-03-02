import React from "react";
import Image from "next/image";
import "./locationInput.css";
import { typeIconMap } from "./typeIcon";

const SuggestionsList = ({
  suggestions = [], 
  handleUseCurrentLocation,
  handleSuggestionClick,
}) => {
  
  return (
    <ul className="suggestions-list">
      <li
        className="suggestion-item use-current-location-item"
        onClick={handleUseCurrentLocation}
      >
        📍 Use Current Location
      </li>
      {suggestions.map((suggestion, index) => {
        const type = suggestion.type || "default";
        return (
          <li
            key={index}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(suggestion.description)}
          >
            {typeIconMap[type]} {suggestion.description}
          </li>
        );
      })}
    </ul>
  );
};

export default SuggestionsList;