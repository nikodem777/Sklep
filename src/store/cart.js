// store/cart.js
import { atom , computed} from "nanostores";

export const $cart = atom([]); // pusty koszyk

export function addToCart(product) {
  const current = $cart.get();
  const exists = current.some((item) => item.id === product.id);
  console.log(exists);

  if (exists) {
    const existItem = current.find((item) => item.id === product.id);
    existItem.quantity++;
    $cart.set([...current]);
  } else {
    $cart.set([...current, { ...product, quantity: 1 }]);
  }
}




export const $numberOfItems = computed($cart, (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0)
);