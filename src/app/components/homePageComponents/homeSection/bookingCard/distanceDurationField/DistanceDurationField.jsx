"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import "./distanceDurationField.css";
import { convertKmToMiles } from "../../../../../../../utils/ConvertDistanceUnit";

const DistanceDurationField = ({ from, to, onDistanceDurationFetched }) => {
  const [distance, setDistance] = useState("N/A");
  const [duration, setDuration] = useState("N/A");
  const [isLoading, setIsLoading] = useState(false);
  
  const lastFrom = useRef(null);
  const lastTo = useRef(null);

  useEffect(() => {
    const fetchDistanceAndDuration = async () => {
      // Prevent re-fetching if 'from' and 'to' haven't changed
      if (from === lastFrom.current && to === lastTo.current) {
        return;
      }

      if (!from || !to) {
        setDistance("N/A");
        setDuration("N/A");
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get("https://api.urido.co.uk/distance", {
          params: { origin: from, destination: to },
        });

        const data = response.data;
        if (data.rows && data.rows[0].elements[0].status === "OK") {
          const { distance, duration } = data.rows[0].elements[0];
          const distanceInMiles = distance
            ? convertKmToMiles(parseFloat(distance.text.replace(" km", "")))
            : "N/A";
          setDistance(distanceInMiles);
          setDuration(duration ? duration.text : "N/A");
          onDistanceDurationFetched(distanceInMiles, duration ? duration.text : "N/A");
          lastFrom.current = from;
          lastTo.current = to;
        } else {
          setDistance("N/A");
          setDuration("N/A");
          onDistanceDurationFetched("N/A", "N/A");
        }
      } catch (error) {
        console.error("Error fetching distance and duration:", error);
        setDistance("N/A");
        setDuration("N/A");
        onDistanceDurationFetched("N/A", "N/A");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDistanceAndDuration();
  }, [from, to, onDistanceDurationFetched]);

  return (
    <div className="estimatedDateAndDuration-div">
      <div className="distance-wrapper">
        <Image
          src="/route.png"
          alt="distance icon"
          height={24}
          width={24}
          className="input-icon"
        />
        <span className="input-divider">|</span>
        {isLoading ? <p>Loading...</p> : <p className="distance-wrapper-para">{distance}</p>}
      </div>
      <div className="duration-wrapper">
        <Image
          src="/clock.png"
          alt="duration icon"
          height={24}
          width={24}
          className="input-icon"
        />
        <span className="input-divider">|</span>
        {isLoading ? <p>Loading...</p> : <p className="duration-wrapper-para">{duration}</p>}
      </div>
    </div>
  );
};

export default DistanceDurationField;
