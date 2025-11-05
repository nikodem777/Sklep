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
            <h1>Dobre Opinie Klientów</h1>
            <p>
              Nasi klienci doceniają wysoką jakość wykonania i niezawodność
              naszych mebli. Dobre opinie potwierdzają, że tworzymy produkty
              warte zaufania.
            </p>
          </div>
          <div className={styles.split}>
            <div className={styles.imgBox}>
              <img src={Woman} alt="" />
              <h3>Alex Pinko</h3>
              <p>Tychy, Polska</p>
              <img src={Rating} alt="" />
            </div>
            <div className={styles.quotesBox}>
              <img src={Quotes} alt="" />
              <p>
                Meble są przepiękne i idealnie pasują do mojego salonu! Widać,
                że wykonane z najwyższą starannością i z dbałością o szczegóły.
                Obsługa klienta była przemiła — z pewnością wrócę po kolejne
                zakupy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerReview;
