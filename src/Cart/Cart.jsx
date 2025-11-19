import styles from "./cart.module.scss";
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

import {
  $cartWithDiscount,
  $total,
  minusQuantity,
  plusQuantity,
} from "../store/cart";

const Cart = () => {
  const cart = useStore($cartWithDiscount);
  const total = useStore($total);
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    adress: "",
  });
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
  useEffect(() => {
    console.log("Aktualny userInfo:", userInfo);
  }, [userInfo]);
  useEffect(() => {
    console.log("Aktualny paymentInfo:", paymentInfo);
  }, [paymentInfo]);
  return (
    <div className={styles.box}>
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
            <button>ZAMÓW</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
