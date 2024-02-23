import React, { useState } from "react";
import axios from "axios";

interface LocationData {
  ip: string;
  city: string;
  region: string;
  country_name: string;
}

const IPTracker: React.FC = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const trackIP = async () => {
    try {
      const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
      setLocationData(response.data);
      console.log("response", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response
            ? `Error: ${error.response.status}`
            : `No response received: ${error.message}`
        );
      } else {
        setError(`Error fetching location data: ${error}`);
      }
      console.error("Error fetching location data:", error);
    }
  };

  //   const trackIP = async () => {
  //     try {
  //       const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setLocationData(data);
  //     } catch (error) {
  //       setError(`Error fetching location data: ${error.message}`);
  //     }
  //   };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter IP Address"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button onClick={trackIP}>Track IP</button>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {locationData && (
        <div>
          <h2>Location Details:</h2>
          <p>IP: {locationData.ip}</p>
          <p>City: {locationData.city}</p>
          <p>Region: {locationData.region}</p>
          <p>Country: {locationData.country_name}</p>
        </div>
      )}
    </div>
  );
};

export default IPTracker;
