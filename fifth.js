import React, { useState } from "react";
import ProfileList from "./ProfileList";
import ProfileMap from "./ProfileMap";
import "./App.css";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  return (
    <div className="App">
      <ProfileList onSelectProfile={setSelectedProfile} />
      <ProfileMap selectedProfile={selectedProfile} />
    </div>
  );
}

export default App;