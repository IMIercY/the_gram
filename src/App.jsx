import React from "react";
import Navbar from "./components/navigation/Navbar.jsx";
// import MyRouter from "./components/router/MyRouter.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
// import Home from "../src/pages/home/Home.jsx";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
    </>
  );
};

export default App;
