"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useSuggestions = (value, showSuggestions) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (showSuggestions && value && value.length >= 3) {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `https://urido.co.uk/api/places?input=${value}`
          );
          if (response.data && Array.isArray(response.data)) {
            setSuggestions(response.data);
          } else {
            console.error("Unexpected API response structure:", response.data);
            setSuggestions([]);
          }
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSuggestions([]);
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [value, showSuggestions]);
  return { suggestions, isLoading };
};

export default useSuggestions;