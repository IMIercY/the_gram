import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import { NotificationSuccess } from "../Notification";

const Profile = ({ bio }) => {
  const [post, setPhoto] = useState("");
  const [user_name, setUsername] = useState("");
  const [messages, setCaption] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
    try {
      if (editingPost) {
        // console.log(formData + "new mean ot");
        await axios.put(`http://localhost:7777/posts/${editingPost.id}`, {
          post,
          user_name,
          messages,
        });
        setEditingPost(null);
        alert("Done!");
        NotificationSuccess("Posts have been updated");
      } else {
        await axios.post("http://localhost:7777/posts", { formData });
      }
      setShowForm(false);
      fetchPosts();
      setPhoto("");
      setUsername("");
      setCaption("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (post) => {
    setShowForm(!showForm);
    setEditingPost(post);
    setPhoto(post.post);
    setUsername(post.user_name);
    setCaption(post.messages);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:7777/posts/${postId}`);
      NotificationSuccess("This post has been deleted");
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
      {showForm && (
        <div className="form-popup">
          <form className="form-popup-content" onSubmit={handleSubmit}>
            <span className="close-button" onClick={handleEdit}>
              &times;
            </span>
            <div className="form-group">
              <label>Upload Photo:</label>
              <input
                type="text"
                value={post}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={user_name}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Caption:</label>
              <input
                type="text"
                value={messages}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
            {/* <button className="submit-button" type="submit">
            {editingPost ? "Update Post" : "Add Post"}
          </button> */}
            <button className="button-update" type="submit">
              Update Post
            </button>
          </form>
        </div>
      )}
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
