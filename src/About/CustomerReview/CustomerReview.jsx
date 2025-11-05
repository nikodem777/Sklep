import styles from "./customerReview.module.scss";
import Woman from "../../assets/woman.png";
import Rating from "../../assets/rating.svg";
import Quotes from "../../assets/quotes.svg";
const CustomerReview = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Happy Customers Review</h1>
            <p>
              Features that we have which Lorem ipsum dolor sit amet,
              consectetur convallis. Arcu, egestas nec scelerisque mi. Augue
              proin
            </p>
          </div>
          <div className={styles.split}>
            <div className={styles.imgBox}>
              <img src={Woman} alt="" />
              <h3>Ramoses Galario</h3>
              <p>Sydney, Australia</p>
              <img src={Rating} alt="" />
            </div>
            <div className={styles.quotesBox}>
              <img src={Quotes} alt="" />
              <p>
                Furniture best dolor sit amet, consectetur adipiscing elit. Duis
                ectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae
                cursus tra purus. Ut enim sed id consectetur velit ullamcorper
                tempus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerReview;
