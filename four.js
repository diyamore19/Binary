// ProfileMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import profiles from "./data";

function ProfileMap({ selectedProfile }) {
  return (
    <div className="profile-map">
      <h2>Profile Map</h2>
      <MapContainer center={[selectedProfile.latitude, selectedProfile.longitude]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[selectedProfile.latitude, selectedProfile.longitude]}>
          <Popup>{selectedProfile.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ProfileMap;