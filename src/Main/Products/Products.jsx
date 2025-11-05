import styles from "./products.module.scss";
import Product from "./Product.jsx";
const Products = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <h1>Featured Collections</h1>
          <p>Most Selling and Trending Product</p>
          <div className={styles.productBox}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
