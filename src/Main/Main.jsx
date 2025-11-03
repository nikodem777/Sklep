import styles from "./main.module.scss";
import Chair from "../assets/multiChair.png";
const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <img src={Chair} alt="" />
        </div>
        <div className={styles.textBox}>
          <h1>Welcome to Farnic</h1>
          <h4>
            Provide best quality of Furniture and we always focus on quality,
            technology and try to make our customer happy
          </h4>
          <p>
            Furniture best dolor sit amet, consectetur adipiscing elit. Duis
            lectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae
            cursus phar purus. Ut enim sed id consectetur velit ullamcorper a.
            Tellus, tempus erdiet dui amet bibendum amet, vestibulum. Sed morbi
            viverra sit tempor tristique sit. Donec vitae lacu
          </p>
          <p>
            Furniture best dolor sit amet, consectetur adipiscing elit. Duis
            lectus mauris, ullamcorper mauris amet, erat amet. Ornare vitae
            cursus phar purus. Ut enim sed id consectetur velit ullamcorper
          </p>
        </div>
      </div>
      <div className={styles.numbers}>
        <div className="num1">
          <h3>20k+</h3>
          <p>Properties</p>
        </div>
        <div className="num2">
          <h3>12k+</h3>
          <p>Customers</p>
        </div>
        <div className="num3">
          <h3>62+</h3>
          <p>Agents</p>
        </div>
        <div className="num4">
          <h3>160+</h3>
          <p>Awards Win</p>
        </div>
      </div>
    </>
  );
};
export default Main;
