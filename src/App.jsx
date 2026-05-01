import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

/* Landing Page Component */
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/plants");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        
        {/* ✅ Correct company name */}
        <h1>Welcome to Paradise Nursery</h1>

        <p>Your one-stop shop for beautiful plants</p>

        {/* ✅ Button with onClick */}
        <button onClick={handleClick}>
          Get Started
        </button>

      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </Router>
  );
};

export default App;
