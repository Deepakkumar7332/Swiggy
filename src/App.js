import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "./utils/dummydata.js";
import "../index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Rescard from "./components/ResCard.js";  

const AppLayout = () => {
  return (

    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
