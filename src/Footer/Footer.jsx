import styles from "./footer.module.scss";
import Logo from "../assets/logoSklep.png";

import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Be from "../assets/be.svg";
const Footer = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.followUs}>
              <img src={Logo} alt="" />
              <p>
                Features that we have which lorem ipsum dolor sit amet,
                consectetur
              </p>
              <h4>Follow us -----</h4>
              <div className={styles.picture}>
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Be} alt="" />
              </div>
            </div>
            <div className={styles.company}>
              <h3>Company</h3>
              <p>Home</p>
              <p>About Us</p>
              <p>Our Blog Post</p>
              <p>Contact</p>
              <p>Login</p>
              <p>Register</p>
              <p>Shop</p>
            </div>
            <div className={styles.information}>
              <h3>Information</h3>
              <p>Terms & Conditions</p>
              <p>Style Guide</p>
              <p>Changelog</p>
              <p>Licences</p>
            </div>
            <div className={styles.contactUs}>
              <h3>Contact Us</h3>
              <p>256, Central City, Borlex House Main town, New York, USA</p>
              <h4>+880(12) 125 48765</h4>
              <p>www.examples.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Box2}>
        <p>
          © 2022 design and developed by <span>Brandbes</span>. Powered by
          <span> Webflow.</span>
        </p>
      </div>
    </>
  );
};
export default Footer;
