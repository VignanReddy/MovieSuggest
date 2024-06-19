import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Search from "./Components/Search";
import Rating from "./Components/Rating";
import Genre from "./Components/Genre";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App ">
      <div className="flex justify-center gap-3 m-6">
        <Main />
      </div>
    </div>
  );
}

export default App;
