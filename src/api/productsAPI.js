// src/api/productsAPI.js

const BASE_URL = "http://localhost:3000/products";

// pobiera całą listę produktów
export async function getAllProducts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Błąd pobierania produktów");
  return await res.json();
}

// pobiera jeden produkt po ID
export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Nie znaleziono produktu");
  return await res.json();
}

// dodaje nowy produkt
export async function addProduct(product) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error("Błąd przy dodawaniu produktu");
  return await res.json();
}

// aktualizacja produktu
export async function updateProduct(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Błąd aktualizacji produktu");
  return await res.json();
}

// usuwanie produktu
export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Błąd usuwania produktu");
  return true;
}
