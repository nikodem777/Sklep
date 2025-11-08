import { useParams } from "react-router-dom";
import { useStore } from "@nanostores/react";
import { $products } from "../store/products";
import { getDiscountedPrice } from "../store/products";
import styles from "./product.module.scss";

const Product = () => {
  const { id } = useParams(); // pobiera id z URL
  const products = useStore($products);

  // znajdź produkt o danym id
  const product = products.find((p) => p.id === Number(id));
  const discounted = getDiscountedPrice(product);

  if (!product) return <p>Nie znaleziono produktu</p>;

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.split}>
          <div className={styles.imgBox}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles.textBox}>
            <h1>{product.name}</h1>
            <p className={styles.cena}>Cena: {discounted.toFixed(2)} zł </p>
            <p className={styles.opis}>
              <span>Szczegóły produktu:</span> {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
