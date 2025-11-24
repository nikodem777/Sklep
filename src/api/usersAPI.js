const USERS_URL = "http://localhost:3000/users";

export async function addUser(user) {
  const res = await fetch(USERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Błąd przy dodawaniu uzytkownika");
  return await res.json();
}

export async function getUserById(id) {
  const res = await fetch(`${USERS_URL}/${id}`);
  if (!res.ok) throw new Error("Nie znaleziono produktu");
  return await res.json();
}
