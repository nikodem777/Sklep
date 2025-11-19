import styles from "./productItem.module.scss";
import Cart from "../../assets/cart-icon.svg";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cart";
import { getDiscountedPrice } from "../../helpers/product.helper";

const ProductItem = ({ product }) => {
  const discounted = getDiscountedPrice(product);
  return (
    <>
      <div className={styles.container2} key={product.id}>
        <div className={styles.imgBox2}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="" className={styles.productImg} />
          </Link>

          <div className={styles.showBox} onClick={() => addToCart(product)}>
            <img src={Cart} alt="" />
            <p>Dodaj do Koszyka</p>
          </div>
        </div>
        <h4>{product.name}</h4>
        <p>
          {discounted.toFixed(2)} zł{" "}
          {product.discount && (
            <span className="oldPrice">{product.price.toFixed(2)} zł</span>
          )}
        </p>
      </div>
    </>
  );
};
export default ProductItem;
