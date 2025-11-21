import { addUser } from "../api/usersAPI";
import styles from "./login.module.scss";
import { useState } from "react";
import { loginUser } from "../api/loginAPI";

const Login = () => {
  const [active, setActive] = useState("zarejestruj");

  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    login: "",
    password: "",
    checkPassword: "",
  });
  const handleUser = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [message, setMessage] = useState("");

  const handleUserRegister = async () => {
    if (
      !userInfo.firstName.trim() ||
      !userInfo.lastName.trim() ||
      !userInfo.adress.trim() ||
      !userInfo.login.trim() ||
      !userInfo.password.trim() ||
      !userInfo.checkPassword.trim()
    ) {
      setMessage("Wszystkie pola muszą być wypełnione");
      return;
    }

    if (userInfo.password !== userInfo.checkPassword) {
      setMessage("Hasła muszą być takie same");
      return;
    }

    setMessage("");

    try {
      const userData = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        adress: userInfo.adress,
        login: userInfo.login,
        password: userInfo.password,
      };

      await addUser(userData);

      setuserInfo({
        firstName: "",
        lastName: "",
        adress: "",
        login: "",
        password: "",
        checkPassword: "",
      });

      setMessage("Użytkownik zarejestrowany pomyślnie!");
    } catch (err) {
      console.log(err);
      setMessage("Błąd serwera");
    }
  };

  const [loginInfo, setLoginInfo] = useState({
    logLogin: "",
    logPassword: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginUser = async () => {
    const { logLogin, logPassword } = loginInfo;
    try {
      const token = await loginUser(logLogin, logPassword);

      // zapisujemy token w localStorage
      localStorage.setItem("authToken", token);

      // możesz też ustawić stan w React, np. isLoggedIn
      setIsLoggedIn(true);
    } catch (err) {
      console.error("Błąd logowania:", err);
    }
  };

  console.log(loginInfo);

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.center}>
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${
                active === "zarejestruj" ? styles.active : ""
              }`}
              onClick={() => setActive("zarejestruj")}
            >
              Zarejestruj się
            </button>
            <button
              className={`${styles.toggleBtn} ${
                active === "zaloguj" ? styles.active : ""
              }`}
              onClick={() => setActive("zaloguj")}
            >
              Zaloguj się
            </button>
          </div>
        </div>
        <div className={styles.move}>
          {/* Warunkowe wyświetlanie formularzy */}
          {active === "zarejestruj" && (
            <div className={styles.create}>
              <h2>Utwórz konto</h2>
              <div className={styles.formNameInfo}>
                <input
                  type="text"
                  placeholder="Imię"
                  name="firstName"
                  value={userInfo.name}
                  onChange={handleUser}
                />
                <input
                  type="text"
                  placeholder="Nazwisko"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleUser}
                />
              </div>
              <input
                type="text"
                placeholder="Adres"
                name="adress"
                value={userInfo.adress}
                onChange={handleUser}
              />
              <div className={styles.formLoginInfo}>
                <input
                  type="text"
                  placeholder="Login"
                  name="login"
                  value={userInfo.login}
                  onChange={handleUser}
                />
                <input
                  type="password"
                  placeholder="Hasło"
                  name="password"
                  value={userInfo.password}
                  onChange={handleUser}
                />
                <input
                  type="password"
                  placeholder="Powtórz hasło"
                  name="checkPassword"
                  value={userInfo.checkPassword}
                  onChange={handleUser}
                />
              </div>
              <div className={styles.btnBox}>
                <button onClick={handleUserRegister}>Zarejestruj</button>
              </div>
              {message && <p className={styles.message}>{message}</p>}
            </div>
          )}

          {active === "zaloguj" && (
            <div className={styles.form}>
              <h2>Zaloguj się</h2>
              <input
                type="email"
                placeholder="Login"
                name="logLogin"
                value={loginInfo.logLogin}
                onChange={handleLogin}
              />
              <input
                type="password"
                placeholder="Hasło"
                name="logPassword"
                value={loginInfo.logPassword}
                onChange={handleLogin}
              />
              <div className={styles.btnBox}>
                <button
                  onClick={() => {
                    handleLoginUser();
                  }}
                >
                  Zaloguj
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
