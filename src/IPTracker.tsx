import React, { useState } from "react";
import axios from "axios";

const IPTracker: React.FC = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [locationData, setLocationData] = useState<any | null>(null);

  const trackIP = async () => {
    try {
      const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
      setLocationData(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter IP Address"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button onClick={trackIP}>Track IP</button>

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
