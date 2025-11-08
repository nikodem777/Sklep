import styles from "./footer.module.scss";
import React, { forwardRef } from "react";
import Logo from "../assets/logoSklep.png";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Be from "../assets/be.svg";

const Footer = forwardRef((props, ref) => {
  return (
    <>
      <div className={styles.box} ref={ref}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.followUs}>
              <img src={Logo} alt="" />
              <p>
                Tworzymy meble, które łączą elegancję, funkcjonalność i
                najwyższą jakość.
              </p>
              <h4>Obserwuj nas ---</h4>
              <div className={styles.picture}>
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Be} alt="" />
              </div>
            </div>
            <div className={styles.company}>
              <h3>Firma</h3>
              <p>Strona główna</p>
              <p>O nas</p>
              <p>Nasz blog</p>
              <p>Logowanie</p>
              <p>Zakładanie konta</p>
              <p>Sklep</p>
            </div>
            <div className={styles.information}>
              <h3>Informacje</h3>
              <p>Regulamin</p>
              <p>Przewodnik stylu</p>
              <p>Lista zmien</p>
              <p>Licencje</p>
            </div>
            <div className={styles.contactUs}>
              <h3>Kontakt</h3>
              <p>Tychy, 43-100,Polska</p>
              <h4>+48 420 676 767</h4>
              <p>www.farnic.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Box2}>
        <p>
          © 2025 zaprojektowano i opracowano przez{" "}
          <span>Nikodem Waśniowski</span>.
        </p>
      </div>
    </>
  );
});
export default Footer;
