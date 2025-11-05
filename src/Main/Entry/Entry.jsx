import styles from "./entry.module.scss";
import LampChair from "../../assets/lampChair.png";

const Entry = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.textBox}>
            <p>45% MEGA SALE OFFER</p>
            <h1>Unique & Stylish Furniture</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit quam
              scelerisque a tincidunt urna. Nisl, quam orci malesuada
            </p>
            <button>SHOP NOW</button>
          </div>
          <div className={styles.imgBox}>
            <img src={LampChair} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Entry;
