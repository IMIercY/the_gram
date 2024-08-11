import React, { useState, useEffect } from "react";
import axios from "axios";
import "./postForm.css";
import { NotificationSuccess } from "../../components/Notification";

const PostForm = () => {
  const [post, setPhoto] = useState("");
  const [user_name, setUsername] = useState("");
  const [messages, setCaption] = useState("");
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
    // try {
    if (editingPost) {
      await axios.put(
        `http://localhost:7777/posts/${editingPost.id}`,
        formData
      );
      setEditingPost(null);
    } else {
      const res = await axios.post("http://localhost:7777/posts", {
        post,
        messages,
        user_name,
      });
      console.log("Me");
      console.log(res.status);
      if (res.status === 201) {
        NotificationSuccess("Post Success");
      }
    }
    fetchPosts();
    setPhoto("");
    setUsername("");
    setCaption("");
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setUsername(post.username);
    setCaption(post.caption);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:7777/posts/${postId}`);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <div className="post-container">
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Upload Photo:</label>
            {/* <input type="file" onChange={handlePhotoChange} /> */}
            <input
              type="text"
              value={post}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={user_name}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Caption:</label>
            <input
              type="text"
              value={messages}
              onChange={(e) => setCaption(e.target.value)}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            {editingPost ? "Update Post" : "Add Post"}
          </button>
        </form>
      </div>

      {/* <div className="post-container">
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
      </div> */}
    </>
  );
};

export default PostForm;
