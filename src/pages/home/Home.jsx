import React from "react";
import "./home.css";

const Home = ({ message, username, post }) => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src="https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg"
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
