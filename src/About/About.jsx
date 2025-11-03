import styles from "./about.module.scss";
import Sofa from "../assets/sofa.png";
import Numbers from "./Numbers/Numbers";
const About = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.text}>
              <h1>About Farnic</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing scelerisque a
                tincidunt urna nisl quam orci males
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
    </>
  );
};
export default About;
