import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";

const Profile = ({ bio }) => {
  const [photo, setPhoto] = useState("");
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:7777/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // const handlePhotoChange = (e) => {
  //   setPhoto(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("post", photo);
    // formData.append("user_name", username);
    // formData.append("messages", caption);

    try {
      if (editingPost) {
        await axios.put(
          `http://localhost:7777/posts/${editingPost.id}`,
          formData
        );
        setEditingPost(null);
      } else {
        await axios.post("http://localhost:7777/posts", { formData });
      }
      fetchPosts();
      setPhoto(null);
      setUsername("");
      setCaption("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setUsername(post.username);
    setCaption(post.caption);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:7777/posts/${postId}`);
      alert("This post has been deleted");
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://media.istockphoto.com/id/485540631/photo/spy-in-tuxedo-aiming-gun.jpg?s=612x612&w=0&k=20&c=Lv58XFovMf4SK3W4iFDSQ7JxCunc8UA1HS_lEE3m07g="
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <h2>Mark</h2>
            <div className="profile-stats">
              <span>100 posts</span>
              <span>2K followers</span>
              <span>50 following</span>
            </div>
          </div>
          ;
        </div>
        <div className="profile-bio">
          <p>{bio}</p>
        </div>
      </div>
      ;{/* ///////// */}
      <div className="post-container">
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Upload Photo:</label>
            <input type="text" />
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Caption:</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          {/* <button className="submit-button" type="submit">
            {editingPost ? "Update Post" : "Add Post"}
          </button> */}
          <button className="submit-button" type="submit">
            Update Post
          </button>
        </form>
      </div>
      <div className="post-container">
        <div className="post-form">
          <h2>Own Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <h2>{post.user_name}</h2>
              <img src={post.post} />
              <p>{post.messages}</p>
              <button className="edit-button" onClick={() => handleEdit(post)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
