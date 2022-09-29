import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import Header from "./Components/Header/Header";
import Apple from "./pages/apple/apple";
import Apricot from "./pages/apricot/apricot";
import Home from "./pages/home/home";
import Lime from "./pages/lime/lime";
import Lychee from "./pages/lychee/lychee";


function App() {
  return (
    <Router>
      <div className="App">
        {/* hello */}
      </div>
      <Header />
      <Routes >
        <Route path="/home" element={<Home /> }  />
        <Route path="/apple" element={<Apple /> } />
        <Route path="/apricot" element={<Apricot  /> } />
        <Route path="/lime" element={<Lime  /> } />
        <Route path="/lychee" element={<Lychee  /> } />
      </Routes>
    </Router>
  );

}

export default App;
