"use client";
import { useState } from "react";
import axios from "axios";

const useCurrentLocation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUseCurrentLocation = async (onChange, onSelect) => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.urido.co.uk/address?latitude=${latitude}&longitude=${longitude}`
            );
            const address = response.data.results[0]?.formatted_address;
            if (address) {
              onChange(address);
              onSelect(address);
            }
          } catch (error) {
            console.error(
              "Error fetching address from current location:",
              error
            );
          } finally {
            setIsLoading(false);
          }
        },
        (error) => {
          console.error("Error fetching current location:", error);
          setIsLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return { handleUseCurrentLocation, isLoading };
};

export default useCurrentLocation;
