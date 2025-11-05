import styles from "./theBest.module.scss";
const Box = ({ image, header, description }) => {
  return (
    <>
      <div className={styles.box2}>
        <div className={styles.imgBox}>
          <img src={image} alt="" />

          <h2>{header}</h2>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};
export default Box;
