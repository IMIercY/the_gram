import React from "react";
import Navbar from "./components/Navigation/Navbar";
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
    </>
  );
};

export default App;
