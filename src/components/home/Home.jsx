import React from "react";
import "./home.css";

const Home = ({ message }) => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src="https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <h2>John Doe</h2>
      </div>
      <div className="post-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DMedqtUivCWUDPGXMzItyOAZRu4roJqmPA&s"
          alt="Post"
          className="post-pic"
        />
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
