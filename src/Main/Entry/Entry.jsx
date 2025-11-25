import styles from "./entry.module.scss";
import LampChair from "../../assets/lampChair.png";

const Entry = () => {
  return (
    <>
      <div className={`${styles.box} section`}>
        <div className={styles.container}>
          <div className={styles.textBox}>
            <p>-45% MEGA OFERTA</p>
            <h1>Unikalne & Stylowne Meble</h1>
            <p>
              Meble inspirowane naturą, wykonane z najwyższej jakości
              materiałów. Prosty, a zarazem wyjątkowy styl dla miłośników
              ciepłych wnętrz.
            </p>
            <button>ZOBACZ OFERTĘ</button>
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
