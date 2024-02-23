import React from "react";
import IPTracker from "./IPTracker";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>IP Address Tracker</h1>
      <IPTracker />
    </div>
  );
};

export default App;
