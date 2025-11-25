import styles from "./numbers.module.scss";

const Numbers = () => {
  return (
    <>
      <div className={`${styles.container} section`}>
        <div className={styles.numbers}>
          <div className="num1">
            <h3>20k+</h3>
            <p>Właściwości</p>
          </div>
          <div className="num2">
            <h3>12k+</h3>
            <p>Klientów</p>
          </div>
          <div className="num3">
            <h3>62+</h3>
            <p>Agentów</p>
          </div>
          <div className="num4">
            <h3>160+</h3>
            <p>Materiałow</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Numbers;
