import styles from "./theBest.module.scss";
import Box from "./Box";
import Boksik from "../assets/boksik-light.svg";
import Return from "../assets/return-light.svg";
import Wallet from "../assets/wallet-light.svg";
import Star from "../assets/star-light.svg";
const TheBest = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Why We are the Best?</h1>
            <p>
              Features that we have which Lorem ipsum dolor sit amet,
              consectetur convallis. Arcu, egestas nec scelerisque mi. Augue
              proin
            </p>
          </div>
          <div className={styles.split}>
            <Box
              image={Boksik}
              header="Free Shipping"
              description="Buy product over $100 and get free home delivery offer"
            />
            <Box
              image={Return}
              header=" Return Policy"
              description="Provide 30 day easy Return policy for all of our customer"
            />
            <Box
              image={Wallet}
              header="Secure Payment"
              description="We conform you that payment system are totally secure"
            />
            <Box
              image={Star}
              header="Best Quality"
              description="We never compromize about our quality and always concern"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default TheBest;
