import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import "react-toastify/dist/ReactToastify.css";
import MyRouter from "../../routes/MyRouter";
// import CreatePost from "../Button/IconHeartAddLine";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const saveUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (saveUser) {
      setUser(saveUser);
    }
  }, []);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const handleLogin = (userLoggedFromRouter) => {
    setUser(userLoggedFromRouter);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="nav-home">
            The Gram
          </Link>
          {user ? (
            <Link to="/createPost">
              <button className="create-post-button">Create Post</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="create-post-button">Create Post</button>
            </Link>
          )}
        </div>
        <div className="nav-center">
          <input type="text" className="nav-search" placeholder="Search..." />
          {/* <CreatePost /> */}
        </div>
        <div className="nav-right">
          <div className="nav-profile">
            {user ? (
              <div>Welcome, {user.username}</div>
            ) : (
              <Link to="/login" className="nav-profile">
                Login
              </Link>
            )}
          </div>
          <Link to="/profile">
            <img
              src="https://media.istockphoto.com/id/485540631/photo/spy-in-tuxedo-aiming-gun.jpg?s=612x612&w=0&k=20&c=Lv58XFovMf4SK3W4iFDSQ7JxCunc8UA1HS_lEE3m07g="
              alt="Profile"
              className="nav-image"
            />
          </Link>
          <Link className="logout" to="/">
            {user ? <div onClick={handleLogout}>Log out</div> : ""}
          </Link>
        </div>
      </nav>
      <MyRouter userLogged={handleLogin} />

      {/* <Routes>
        <Route path="/" element={<Posts />} />
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
        <Route path="/login" element={<Login userLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </>
  );
};

export default Navbar;
