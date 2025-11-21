import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logoSklep.png";
import Cart from "../assets/cart-icon.svg";
import User from "../assets/user.svg";
import ProductItem from "../Main/Products/ProductItem";

import { useStore } from "@nanostores/react";
import { $numberOfItems } from "../store/cart";
import { useState } from "react";

const Navbar = ({ onScrollToFooter }) => {
  const total = useStore($numberOfItems);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.box}>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <Link to="/" style={{ color: "black" }}>
            Strona główna
          </Link>
          <Link to="/about" style={{ color: "black" }}>
            O nas
          </Link>
          <a onClick={onScrollToFooter} style={{ color: "black" }}>
            Kontakt
          </a>
        </div>

        <div className={styles.cart}>
          <div
            className={styles.user}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={User} alt="" />
            {isHovered && (
              <ul className={styles.list}>
                <li>
                  <Link
                    to={"/Login"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Zaloguj
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/cart">
            <div className={styles.cartWrapper}>
              <img src={Cart} alt="Koszyk" className={styles.cartIcon} />
              <div className={styles.cartCount}>{total}</div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
