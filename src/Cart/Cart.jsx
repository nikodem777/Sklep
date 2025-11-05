import styles from "./cart.module.scss";
import Chair from "../assets/Chair.png";
import { useStore } from "@nanostores/react";
import { $cart } from "../store/cart";
const Cart = () => {
  const cart = useStore($cart);

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Koszyk</h1>

        {cart.map((item) => (
          <div className={styles.productBox} key={item.id}>
            <img src={Chair} alt="" />
            <p>{item.name}</p>
            <p>item.price </p>
            <div className={styles.quantity}>
              <button className={styles.minus}>−</button>
              <input type="text" value={item.quantity} readOnly />
              <button className={styles.plus}>+</button>
            </div>
            <p>300zl</p>
          </div>
        ))}
        <div className={styles.summary}></div>
      </div>
    </div>
  );
};
export default Cart;
