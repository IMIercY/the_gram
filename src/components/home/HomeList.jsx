import React from "react";
import Home from "./Home";

const HomeList = () => {
  const data = [
    {
      user_name: "Husky",
      post: "https://cdn.shopify.com/s/files/1/0535/2738/0144/files/shutterstock_610222331_1024x1024.jpg?v=1698186608",
      messages: "My beutiful dog !",
    },
    {
      user_name: "Bulldog",
      post: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQBaYSG9HopQSTZCiIsohdpSVJS63vdIiCJBPAQZkxBuaj3OzG2HGEqwHoDqmWP2IvL8kKpO-wARGXjZLI",
      messages: "My Lovely dog !",
    },
    {
      user_name: "Rottweiler",
      post: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSjaf16lJFLNW3nfe8sFe52cWVmfFXX0Jc7hwYiQwTjnzI1ipEPcXUAQol5QC39CYeK",
      messages: "My Strongly dog !",
    },
    {
      user_name: "German Shepherd",
      post: "https://www.dogster.com/wp-content/uploads/2024/03/german-shepherd-dog-1-600x400.jpg",
      messages: "Wow German dog !",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
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
