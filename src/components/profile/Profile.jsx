import React from "react";
import "./profile.css";

const Profile = ({ name, bio, avatar, address }) => {
  return (
    <>
      <div className="profile-container">
        <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
        <div className="profile-details">
          <h2 className="profile-name">{name}</h2>
          <h3 className="profile-details">{address}</h3>
          <p className="profile-bio">{bio}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
