import styles from "./main.module.scss";
import TheBest from "../TheBest/TheBest";
import Entry from "./Entry/Entry";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
const Main = () => {
  return (
    <>
      <Entry />
      <Categories />
      <Products />
      <TheBest />
    </>
  );
};
export default Main;
