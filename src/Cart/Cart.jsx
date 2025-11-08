import styles from "./cart.module.scss";

import { useStore } from "@nanostores/react";

import {
  $cartWithDiscount,
  $total,
  minusQuantity,
  plusQuantity,
} from "../store/cart";

const Cart = () => {
  const cart = useStore($cartWithDiscount);
  const total = useStore($total);
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
            <input type="text" />
            <p>Nazwisko:</p>
            <input type="text" />
            <p>Adres:</p>
            <input type="text" />
          </div>
          <div className={styles.payment}>
            <h1>Sposób płatności</h1>
            <div className={styles.checkPayment}>
              <input type="checkbox" name="" id="" />
              <p>Płatność przy odbiorze</p>
            </div>
            <div className={styles.checkPayment}>
              <input type="checkbox" name="" id="" />
              <p>Płatność kartą</p>
            </div>
            <div className={styles.checkPayment}>
              <input type="checkbox" name="" id="" />
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
