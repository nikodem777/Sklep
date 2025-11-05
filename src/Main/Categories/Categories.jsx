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
      <div className={styles.box}>
        <div className={styles.container}>
          <h1>Choose your Category</h1>
          <p>Select your product from our category options</p>
          <div className={styles.split}>
            <Category image={Chair} description="Chair" />
            <Category image={Bed} description="Bed" />
            <Category image={ElegantChair} description="Sofa" />
            <Category image={Table} description="Table" />
            <Category image={SideDrawer} description="Side Drawer" />
            <Category image={DiningChair} description="Dining Chair" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;
