import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";

const HomeList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7777/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);
  return (
    <div>
      {posts.map((item, index) => (
        <Home
          key={index}
          message={item.messages}
          username={item.user_name}
          post={item.post}
        />
      ))}
    </div>
  );
};

export default HomeList;
