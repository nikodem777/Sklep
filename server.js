// server.js
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

// __dirname w ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Możesz też dodać middleware sprawdzający login
server.post("/login", (req, res) => {
  const { login, password } = req.body;
  const users = router.db.get("users").value();
  const foundUser = users.find(
    (u) => u.login === login && u.password === password
  );
  if (foundUser) {
    // Zwracamy prosty token z id i loginem
    res.json({ token: btoa(`${foundUser.id}:${foundUser.login}`) });
  } else {
    res.status(401).json({ error: "Nieprawidłowy login lub hasło" });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server z middleware działa na http://localhost:3000");
});
