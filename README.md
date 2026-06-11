🛒 Sklep React (Vite + JSON Server)

📌 Opis projektu

Jest to aplikacja typu sklep internetowy stworzona w React (Vite).
Aplikacja umożliwia:

* logowanie użytkowników
* przeglądanie produktów
* zarządzanie koszykiem
* składanie zamówień
* podgląd historii zamówień

Dane aplikacji przechowywane są lokalnie w pliku db.json, a backend oparty jest o json-server z dodatkowym middleware obsługującym logowanie.

⸻

⚙️ Technologie

* React 19
* Vite
* React Router
* JSON Server
* Node.js
* Sass

⸻

🚀 Uruchomienie projektu

1. Instalacja zależności

npm install

⸻

2. Uruchomienie frontendu (React + Vite)

npm run dev

Aplikacja uruchomi się pod:
http://localhost:5173

⸻

3. Uruchomienie backendu (JSON Server + API)

npm run start-server

Serwer działa na:
http://localhost:3000

⸻

📡 API

Aplikacja korzysta z lokalnego API opartego o db.json.

Produkty

GET /products

⸻

Użytkownicy

GET /users

⸻

Zamówienia

GET /orders
POST /orders

⸻

Logowanie

POST /login

Body:
{
“login”: “email”,
“password”: “hasło”
}

Odpowiedź:
{
“token”: “id:login (base64)”
}

⸻

🗄️ Struktura danych (db.json)

Plik db.json zawiera:

* users – użytkowników sklepu
* products – listę produktów
* orders – zamówienia

⸻

🛒 Funkcjonalności

* logowanie użytkownika
* przeglądanie produktów
* szczegóły produktu
* koszyk zakupowy:
    * dodawanie produktów
    * usuwanie produktów
    * zmiana ilości
* składanie zamówień
* historia zamówień

⸻

🔐 Logowanie

System logowania sprawdza dane użytkownika w db.json.
Po poprawnym logowaniu zwracany jest prosty token:

id:login (base64)
