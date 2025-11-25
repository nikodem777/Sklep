import styles from "./about.module.scss";
import Sofa from "../assets/sofa.png";
import Numbers from "./Numbers/Numbers";
import TheBest from "../TheBest/TheBest";
import CustomerReview from "./CustomerReview/CustomerReview";
const About = () => {
  return (
    <>
      <div className={`${styles.box} section`}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.text}>
              <h1>O Farnic</h1>
              <p>
                Tworzymy meble, które łączą funkcjonalność z ponadczasowym
                stylem. Każdy projekt powstaje z pasji do detalu i jakości
                wykonania.
              </p>
            </div>
            <div className={styles.imgBox}>
              <img
                src={Sofa}
                alt=""
                style={{
                  width: "450px",
                  height: "250px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Numbers />
      <TheBest />
      <CustomerReview />
    </>
  );
};
export default About;
