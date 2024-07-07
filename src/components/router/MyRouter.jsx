import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Profile from "../profile/Profile";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default MyRouter;
