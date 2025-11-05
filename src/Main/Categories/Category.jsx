import styles from "./categories.module.scss";

const Category = ({ image, description }) => {
  return (
    <>
      <div className={styles.categoryBox}>
        <img src={image} alt="" />
        <p>{description}</p>
      </div>
    </>
  );
};
export default Category;
