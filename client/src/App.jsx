import React from "react";
import Navbar from "./components/Navigation/Navbar";
import "./App.css";
import { ToastContainer } from "react-toastify";
import POSHomepage from "./components/POSHomepage";

const App = () => {
  return (
    <>
      {/* <ToastContainer />
      <Navbar /> */}
      <POSHomepage />
    </>
  );
};

export default App;
