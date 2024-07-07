import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import "./navbar.css";
import HomeList from "../home/HomeList";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="nav-home">
            The Gram
          </Link>
        </div>
        <div className="nav-center">
          <input type="text" className="nav-search" placeholder="Search..." />
        </div>
        <div className="nav-right">
          <Link to="/profile" className="nav-profile">
            Profile Picture
          </Link>
          <img
            src="https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg"
            alt="Profile"
            className="nav-image"
          />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Profile
              address={"WazintonDC"}
              name={"PUG"}
              avatar={
                "https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg"
              }
              bio={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eveniet. Nostrum fugiat accusamus aperiam necessitatibus hic illo voluptas sequi impedit, similique maxime eum in neque tempora dignissimos rem soluta labore.Impedit nemo sit ea quasi ad aliquid, accusantium minima amet, molestias totam ipsam. Sint expedita officia placeat nam, repellendus laborum rem quidem eligendi autem. Laboriosam nihil id aliquid hic incidunt.Dolore quia fugiat atque eveniet, aliquam fuga natus, voluptas delectus voluptate tempore quae dolor officia, corrupti vero in exercitationem ipsum nulla sint explicabo porro? Voluptas ab doloribus ad? Obcaecati, totam.Eligendi quisquam dolorum nulla. Provident, distinctio! Qui aliquam reiciendis quis perspiciatis possimus? Assumenda eos ab excepturi consequuntur reiciendis id inventore cum quaerat non ad facere quos illo, deserunt eius consequatur.Molestiae iure ratione, tenetur modi nam distinctio minima fuga reprehenderit incidunt excepturi eos dolores vitae, repellendus ab deleniti eius. Vel laboriosam beatae eos. Itaque sapiente saepe corporis amet quam magnam?Nisi temporibus dicta autem aspernatur libero, maxime sapiente neque minima repellat, officiis dolor labore voluptate ea eaque voluptates inventore doloribus. Modi ab repellendus quisquam eligendi? Ea nobis repudiandae assumenda praesentium.Obcaecati modi error quidem sit, tenetur animi corporis voluptas magni illo voluptates vero maiores consequuntur dicta fugit facere vitae adipisci amet possimus? Id reprehenderit quae voluptatum, ducimus ipsam enim suscipit.Est, quas? Veniam sint aliquam eligendi et sed, rerum harum. Nisi libero aperiam qui obcaecati, quisquam blanditiis at earum nobis nemo accusamus tenetur beatae illum explicabo corrupti ad, alias ratione!"
              }
            />
          }
        />
      </Routes>
    </>
  );
};

export default Navbar;
