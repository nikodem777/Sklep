import styles from "./App.module.scss";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
import About from "./About/About";
import Product from "./Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import Login from "./Login/Login";
import Account from "./Account/Account";
import { getUserById } from "./api/usersAPI";

function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [currentUserData, setCurrentUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sprawdzenie tokena przy ładowaniu aplikacji
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const [id] = atob(token).split(":");
        setIsLoggedIn(true);

        getUserById(id)
          .then((data) => setCurrentUserData(data))
          .catch((err) => console.error(err));
      } catch (err) {
        console.error("Błąd dekodowania tokena:", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setCurrentUserData(null); // opcjonalnie wyczyść dane użytkownika
  };

  return (
    <BrowserRouter>
      <Navbar
        onScrollToFooter={scrollToFooter}
        isLoggedIn={isLoggedIn}
        currentUserData={currentUserData}
        handleLogout={handleLogout}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/Account"
          element={<Account currentUserData={currentUserData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/cart"
          element={
            <Cart isLoggedIn={isLoggedIn} currentUserData={currentUserData} />
          }
        />
      </Routes>
      <Footer ref={footerRef} />
    </BrowserRouter>
  );
}

export default App;
