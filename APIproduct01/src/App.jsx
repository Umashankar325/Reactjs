import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Deatails from "./Components/Deatails";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/datails/:id" element={<Deatails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
