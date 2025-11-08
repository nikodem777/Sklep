// store/cart.js
import { atom, computed } from "nanostores";

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

export function minusQuantity(product) {
  const current = $cart.get();

  const updated = current.map((item) =>
    item.id === product.id
      ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
      : item
  );

  $cart.set(updated);
}

export function plusQuantity(product) {
  const current = $cart.get();

  const updated = current.map((item) =>
    item.id === product.id
      ? { ...item, quantity: Math.max(item.quantity + 1) }
      : item
  );

  $cart.set(updated);
}
export const $cartWithDiscount = computed($cart, (cart) =>
  cart.map((item) => ({
    ...item,
    finalPrice:
      item.discount && item.discount !== "0%"
        ? item.price * (1 - Number(item.discount.replace("%", "")) / 100)
        : item.price,
  }))
);

// 💵 Możesz też dodać całkowitą sumę koszyka
export const $total = computed($cartWithDiscount, (cart) =>
  cart.reduce((sum, item) => sum + item.finalPrice * item.quantity, 0)
);
