import React from "react";
import Home from "./Home/Home";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
