import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productsAPI";
import { getDiscountedPrice } from "../helpers/product.helper";
import styles from "./product.module.scss";

const Product = () => {
  const { id } = useParams(); // pobiera id z URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts(); // pobieramy z API
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Ładowanie…</p>;

  // znajdź produkt o danym id
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Nie znaleziono produktu</p>;
  const discounted = getDiscountedPrice(product);

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
