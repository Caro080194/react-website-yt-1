import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
