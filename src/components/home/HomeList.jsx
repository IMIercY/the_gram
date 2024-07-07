import React from "react";
import Home from "./Home";

const HomeList = () => {
  const messages = ["Pug 1", "Pug 2", "Pug 3", "Pug 4"];
  const user_name = ["Husky", "Bulldog", "Rottweiler", "German Shepherd"];

  return (
    <div>
      {messages.map((message, index) => (
        <Home key={index} message={message} />
      ))}
    </div>
  );
};

export default HomeList;
