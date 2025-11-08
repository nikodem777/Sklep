import styles from "./App.module.scss";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
import About from "./About/About";
import Product from "./Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";

function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <BrowserRouter>
      <Navbar onScrollToFooter={scrollToFooter} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer ref={footerRef} />
    </BrowserRouter>
  );
}

export default App;
