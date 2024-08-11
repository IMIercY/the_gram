import React from "react";
import "./postDetail.css";

const PostDetail = () => {
  return (
    <div className="card">
      <img className="profile-photo" src="" alt="" />

      <div className="user-name">John Doe</div>

      <div className="time-stamp">21/10/2019, 10:30:00</div>

      <div className="post-title">Learning React is so much fun!</div>

      <img className="post-cover" src="" alt="" />

      <button id="read-more-btn">Read more...</button>
    </div>
    // const Card = ({ post }) => (

    //     <div className="card">

    //       <img className="profile-photo" src={post.profilePhoto} alt={post.user} />

    //       <div className="user-name">{post.user}</div>

    //       <div className="time-stamp">

    //         {new Date(post.timestamp).toLocaleString()}

    //       </div>

    //       <div className="post-title">{post.title}</div>

    //       <img className="post-cover" src={post.cover} alt={post.title} />

    //       <button id="read-more-btn">Read more...</button>

    //     </div>

    //   );
  );
};

export default PostDetail;
