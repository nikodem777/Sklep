import styles from "./cart.module.scss";
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { addOrder } from "../api/orderAPI";
import { Link } from "react-router-dom";

import {
  $cartWithDiscount,
  $total,
  minusQuantity,
  plusQuantity,
} from "../store/cart";

const Cart = ({ isLoggedIn, currentUserData }) => {
  console.log(currentUserData);
  const [active, setActive] = useState("anonimowy");
  const cart = useStore($cartWithDiscount);
  const total = useStore($total);
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    adress: "",
  });
  const loggedUserData = currentUserData
    ? {
        firstName: currentUserData.firstName,
        lastName: currentUserData.lastName,
        adress: currentUserData.adress,
      }
    : { firstName: "", lastName: "", adress: "" };
  const fillLoggedUser = () => {
    setuserInfo(loggedUserData);
  };
  const [paymentInfo, setpaymentInfo] = useState("");

  const handleUser = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    setpaymentInfo(e.target.value);
  };
  const [message, setMessage] = useState("");
  const [messageOrder, setMessageOrder] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOrder = async () => {
    // walidacja
    if (
      !userInfo.firstName.trim() ||
      !userInfo.lastName.trim() ||
      !userInfo.adress.trim()
    ) {
      setMessage("Proszę uzupełnić wszystkie pola użytkownika!");
      return;
    }

    if (!paymentInfo) {
      setMessage("Proszę wybrać metodę płatności!");
      return;
    }

    if (cart.length === 0) {
      setMessage("Koszyk jest pusty!");
      return;
    }

    // jeśli wszystko jest ok → wysyłamy zamówienie
    setLoading(true);
    setMessage("");

    try {
      const orderData = {
        user: { ...userInfo },
        payment: paymentInfo,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.finalPrice,
        })),
        totalPrice: total.toFixed(2),
      };

      const res = await addOrder(orderData);
      setMessageOrder(`Zamówienie dodane! ID: ${res.id}`);
      // opcjonalnie czyścimy formularz i koszyk
      setuserInfo({ firstName: "", lastName: "", adress: "" });
      setpaymentInfo("");
      // clearCart(); // jeśli masz funkcję do czyszczenia koszyka
    } catch (err) {
      console.error(err);
      setMessage("Wystąpił błąd przy dodawaniu zamówienia");
    } finally {
      setLoading(false);
    }
    setIsOpen(true);
  };

  return (
    <div className={`${styles.box} section`}>
      <div className={styles.container}>
        <h1>Koszyk</h1>

        {cart.map((item) => (
          <div className={styles.productBox} key={item.id}>
            <img src={item.image} alt="" />
            <p className={styles.name}>{item.name}</p>
            {item.discount && item.discount !== "0%" ? (
              <p>
                <span className={styles.oldPrice}>
                  {item.price.toFixed(2)} zł
                </span>{" "}
                <span className={styles.newPrice}>
                  {item.finalPrice.toFixed(2)} zł
                </span>
              </p>
            ) : (
              <p>{item.price.toFixed(2)} zł</p>
            )}

            <div className={styles.quantity}>
              <button
                className={styles.minus}
                onClick={() => minusQuantity(item)}
              >
                −
              </button>
              <input type="text" value={item.quantity} readOnly />
              <button
                className={styles.plus}
                onClick={() => plusQuantity(item)}
              >
                +
              </button>
            </div>
            <div className={styles.last}>
              <p>{(item.finalPrice * item.quantity).toFixed(2)} zł</p>
            </div>
          </div>
        ))}
        <div className={styles.summary}>
          <div className={styles.summaryBox}>
            <p className={styles.p1}>Suma: </p>
            <p className={styles.p2}>{total.toFixed(2)} zł</p>
          </div>
        </div>
        <div className={styles.splitData}>
          <div className={styles.clientInformation}>
            <h1>Dane klienta</h1>

            {isLoggedIn ? (
              <div className={styles.toggleContainer}>
                <button
                  className={`${styles.toggleBtn} ${
                    active === "anonimowy" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setActive("anonimowy");
                    setuserInfo({ firstName: "", lastName: "", adress: "" });
                  }}
                >
                  Anonimowy
                </button>
                <button
                  className={`${styles.toggleBtn} ${
                    active === "zaloguj" ? styles.active : ""
                  }`}
                  onClick={() => {
                    setActive("zaloguj");
                    fillLoggedUser();
                  }}
                >
                  Zalogowany
                </button>
              </div>
            ) : (
              <p>Kupujesz jako niezalogowany</p>
            )}

            <p>Imię:</p>
            <input
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleUser}
              placeholder="Podaj imię..."
            />
            <p>Nazwisko:</p>
            <input
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleUser}
              placeholder="Podaj nazwisko..."
            />

            <p>Adres:</p>
            <input
              type="text"
              name="adress"
              value={userInfo.adress}
              onChange={handleUser}
              placeholder="Podaj adres..."
            />
          </div>
          <div className={styles.payment}>
            <h1>Sposób płatności</h1>
            <div className={styles.checkPayment}>
              <input
                className={styles.radio}
                type="radio"
                name="payment"
                value="onDelivery"
                checked={paymentInfo === "onDelivery"}
                onChange={handlePayment}
              />
              <p>Płatność przy odbiorze</p>
            </div>
            <div className={styles.checkPayment}>
              <input
                className={styles.radio}
                type="radio"
                name="payment"
                value="byCard"
                checked={paymentInfo === "byCard"}
                onChange={handlePayment}
              />
              <p>Płatność kartą</p>
            </div>
            <div className={styles.checkPayment}>
              <input
                className={styles.radio}
                type="radio"
                name="payment"
                value="byBLIK"
                checked={paymentInfo === "byBLIK"}
                onChange={handlePayment}
              />
              <p>Płatność BLIK</p>
            </div>
            <button onClick={handleOrder}>ZAMÓW</button>
            {message && <p style={{ color: "red" }}>{message}</p>}
            {isOpen && (
              <div className={styles.overlay}>
                <div className={styles.modal}>
                  <h2 className={styles.title}>Twoje Zamówienie</h2>

                  <p className={styles.id}>{messageOrder}</p>

                  <Link to={"/"}>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className={styles.closeBtn}
                    >
                      Powrót na stronę główną
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
