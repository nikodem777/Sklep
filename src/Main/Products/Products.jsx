import styles from "./products.module.scss";
import ProductItem from "./ProductItem.jsx";
import { useStore } from "@nanostores/react";
import { $products } from "../../store/products";
const Products = () => {
  const products = useStore($products);
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <h1>Najnowsza kolekcja</h1>
          <p>Najlepiej sprzedawane i nowe produkty</p>
          <div className={styles.productBox}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                // image={product.image}
                // name={product.name}
                // price={product.price}
                // priceBefore={product.priceBefore}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
