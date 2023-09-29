// ProfileList.js
import React from "react";
import profiles from "./data";

function ProfileList({ onSelectProfile }) {
  return (
    <div className="profile-list">
      <h2>Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} onClick={() => onSelectProfile(profile)}>
            {profile.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;