import styles from "./products.module.scss";
import ProductItem from "./ProductItem.jsx";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productsAPI";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts).catch(console.error);
  }, []);
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
