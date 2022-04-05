import React from "react";
// import { BrowserRouter as Router,Routes,  Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Router>
          <Route path="/" exact element={Home} />
          <Route path="/Login" element={Login} />
        </Router>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
