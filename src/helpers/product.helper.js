export function getDiscountedPrice(product) {
  // jeśli nie ma zniżki, zwróć oryginalną cenę
  if (!product.discount) return product.price;

  const discountValue = Number(product.discount.replace("%", "")) / 100;
  const finalPrice = product.price * (1 - discountValue);

  return finalPrice;
}
