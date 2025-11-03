import { useState } from "react";
import styles from "./App.module.scss";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
import About from "./About/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
