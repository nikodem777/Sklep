import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logoSklep.png";
import Cart from "../assets/cart-icon.svg";
import User from "../assets/user.svg";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Link to="/" style={{ color: "black" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "black" }}>
          About
        </Link>
        <a href="" style={{ color: "black" }}>
          Contact
        </a>
      </div>

      <div className={styles.cart}>
        <Link to="/">
          <img src={User} alt="" />
        </Link>
        <Link to="/cart">
          <img src={Cart} alt="" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
