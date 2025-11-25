import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productsAPI";
import { getDiscountedPrice } from "../helpers/product.helper";
import styles from "./product.module.scss";
import { addToCart } from "../store/cart";

const Product = ({ maxLines = 2 }) => {
  const { id } = useParams(); // pobiera id z URL

  // hooki MUSZĄ być tutaj
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductById(id);

        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <p>Ładowanie…</p>;

  const discounted = getDiscountedPrice(product);

  const style = !expanded
    ? {
        display: "-webkit-box",
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }
    : {};

  return (
    <div className={`${styles.box} section`}>
      <div className={styles.container}>
        <div className={styles.split}>
          <div className={styles.imgBox}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles.textBox}>
            <h1>{product.name}</h1>
            <p className={styles.cena}>Cena: {discounted.toFixed(2)} zł </p>
            <button
              className={styles.cartBtn}
              onClick={() => {
                console.log(product);
                addToCart(product);
              }}
            >
              Dodaj do koszyka
            </button>
            <div className={styles.split}>
              <p className={styles.opis} style={style}>
                <span>Szczegóły produktu:</span> {product.description}
              </p>
              <button
                className={styles.textBtn}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Zwiń " : "Rozwiń"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
