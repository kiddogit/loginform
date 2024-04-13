import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="appBg">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
