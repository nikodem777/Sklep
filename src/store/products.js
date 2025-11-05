import { atom } from "nanostores";

export const $products = atom([
  {
    id: 1,
    name: "Krzesło tarasowe",
    image: "../../public/productChair.jpg",
    price: 65.35,
    priceBefore: 102.35,
  },
  {
    id: 2,
    name: "Drewniana komoda",
    image: "../../public/productWSTable.jpg",
    price: 32.1,
    priceBefore: 68.35,
  },
  {
    id: 3,
    name: "Krzesło jajko",
    image: "../../public/productEggChair.jpg",
    price: 50.25,
    priceBefore: 80.0,
  },
  {
    id: 4,
    name: "Drewniany stolik",
    image: "../../public/productTeaTable.jpg",
    price: 40.5,
    priceBefore: 40.5,
  },
  {
    id: 5,
    name: "Drewniana szafka",
    image: "../../public/productWTable.jpg",
    price: 80.3,
    priceBefore: null,
  },
  {
    id: 6,
    name: "Drewniane łózko",
    image: "../../public/productWBed.jpg",
    price: 430.0,
    priceBefore: null,
  },
]);

export function addProduct(product) {
  $products.set([...$products.get(), product]);
}
export function getProductById(id){
  const store = $products.get();
  return store.find((item)=>item.id = id)
}