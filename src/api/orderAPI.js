const ORDER_URL = "http://localhost:3000/orders";

export async function addOrder(order) {
  const res = await fetch(ORDER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  if (!res.ok) throw new Error("Błąd przy dodawaniu zamowienia");
  return await res.json();
}
