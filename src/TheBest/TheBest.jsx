import styles from "./theBest.module.scss";
import Box from "./Box";
import Boksik from "../assets/boksik-light.svg";
import Return from "../assets/return-light.svg";
import Wallet from "../assets/wallet-light.svg";
import Star from "../assets/star-light.svg";
const TheBest = () => {
  return (
    <>
      <div className={`${styles.box} section`}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Dlaczego jesteśmy najlepsi?</h1>
            <p>
              Innowacyjny design, perfekcyjne wykonanie i dbałość o każdy detal
              — to nas wyróżnia.
            </p>
          </div>
          <div className={styles.split}>
            <Box
              image={Boksik}
              header="Darmowa dostawa"
              description="Kup coś za min. 100 zł i ciesz się darmową przesyłką"
            />
            <Box
              image={Return}
              header="Polityka Zwrotów"
              description="Łatwy zwrot 30 dni od zakupu przedmiotu"
            />
            <Box
              image={Wallet}
              header="Bezpieczne płatności"
              description="Zapewniamy bezpieczeństwo przy dokonywaniu płatności"
            />
            <Box
              image={Star}
              header="Najlepsza jakość"
              description="Zapewniamy najlepszą jakość produktu dla naszego klienta"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default TheBest;
