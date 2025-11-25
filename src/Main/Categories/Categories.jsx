import styles from "./categories.module.scss";
import Chair from "../../assets/chair.png";
import Bed from "../../assets/bed.png";
import ElegantChair from "../../assets/elegantChair.png";
import Table from "../../assets/table.png";
import DiningChair from "../../assets/diningChair.png";
import SideDrawer from "../../assets/sideDrawer.png";
import Category from "./Category";
const Categories = () => {
  return (
    <>
      <div className={`${styles.box} section`}>
        <div className={styles.container}>
          <h1>Wybierz Kategorię</h1>
          <p>Wybierz swój nowy produkt z pośród naszych kategorii</p>
          <div className={styles.split}>
            <Category image={Chair} description="Krzesła" />
            <Category image={Bed} description="Łóżka" />
            <Category image={ElegantChair} description="Sofa" />
            <Category image={Table} description="Stół" />
            <Category image={SideDrawer} description="Szafka Nocna" />
            <Category image={DiningChair} description="Krzesło stołowe" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;
