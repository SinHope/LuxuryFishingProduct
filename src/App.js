import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage.jsx";

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
