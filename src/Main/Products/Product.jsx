import styles from "./product.module.scss";
import ProductChair from "../../assets/productChair.jpg";
import Cart from "../../assets/cart-icon.svg";
const Product = () => {
  return (
    <>
      <div className={styles.container2}>
        <div className={styles.imgBox2}>
          <img src={ProductChair} alt="" className={styles.productImg} />
          <a href="">
            <div className={styles.showBox}>
              <img src={Cart} alt="" />
              <p>Add to cart</p>
            </div>
          </a>
        </div>
        <h4>Accent Leisure Chairs</h4>
        <p>
          $ 65.35 USD<span> $102.35 USD</span>
        </p>
      </div>
    </>
  );
};
export default Product;
