import React from "react";
import "./home.css";

const Home = ({ message, username, post }) => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src="https://media.istockphoto.com/id/485540631/photo/spy-in-tuxedo-aiming-gun.jpg?s=612x612&w=0&k=20&c=Lv58XFovMf4SK3W4iFDSQ7JxCunc8UA1HS_lEE3m07g="
          alt="Profile"
          className="profile-pic"
        />
        <h2>{username}</h2>
      </div>
      <div className="post-section">
        <img src={post} alt="Post" className="post-pic" />
      </div>
      <div className="actions-section">
        <button className="like-button">Like</button>
        <button className="comment-button">Comment</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Home;
