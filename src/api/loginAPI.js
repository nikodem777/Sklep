const LOGIN_URL = "http://localhost:3000/login";

export async function loginUser(login, password) {
  const res = await fetch(LOGIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login, password }),
  });

  if (!res.ok) throw new Error("Błąd przy logowaniu");
  return await res.json();
}
