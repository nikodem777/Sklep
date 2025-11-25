import { useState } from "react";
import { loginUser } from "../api/loginAPI";
import { addUser } from "../api/usersAPI";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";
const Login = ({ setIsLoggedIn }) => {
  const [active, setActive] = useState("zarejestruj");
  const navigate = useNavigate();

  const initialUser = {
    firstName: "",
    lastName: "",
    adress: "",
    login: "",
    password: "",
    checkPassword: "",
  };
  // stan dla rejestracji
  const [userInfo, setUserInfo] = useState(initialUser);

  // stan dla logowania
  const [loginInfo, setLoginInfo] = useState({
    logLogin: "",
    logPassword: "",
  });

  // stan dla komunikatów
  const [registerMessage, setRegisterMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  // obsługa inputów rejestracji
  const handleUser = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // obsługa inputów logowania
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  // rejestracja użytkownika
  const handleUserRegister = async () => {
    if (Object.values(userInfo).some((value) => !value.trim())) {
      setRegisterMessage("Wszystkie pola muszą być wypełnione");
      return;
    }

    if (userInfo.password !== userInfo.checkPassword) {
      setRegisterMessage("Hasła muszą być takie same");
      return;
    }

    setRegisterMessage("");

    try {
      const { checkPassword, ...userData } = userInfo;

      await addUser(userData);

      setUserInfo(initialUser);

      setRegisterMessage("Użytkownik zarejestrowany pomyślnie!");
    } catch (err) {
      console.error(err);
      setRegisterMessage("Błąd serwera");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  // logowanie użytkownika
  const handleLoginUser = async () => {
    const { logLogin, logPassword } = loginInfo;

    if (!logLogin.trim() || !logPassword.trim()) {
      setLoginMessage("Wypełnij wszystkie pola logowania");
      return;
    }

    try {
      const { token } = await loginUser(logLogin, logPassword);

      // zapis tokena w localStorage
      localStorage.setItem("authToken", token);

      setIsLoggedIn(true);
      setLoginMessage("");
      setIsOpen(true);
      // reset formularza logowania
      setLoginInfo({ logLogin: "", logPassword: "" });
    } catch (err) {
      console.error("Błąd logowania:", err);
      setLoginMessage("Niepoprawny login lub hasło");
    }
  };

  return (
    <div className={`${styles.box} section`}>
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
          {/* Formularz rejestracji */}
          {active === "zarejestruj" && (
            <div className={styles.create}>
              <h2>Utwórz konto</h2>
              <div className={styles.formNameInfo}>
                <input
                  type="text"
                  placeholder="Imię"
                  name="firstName"
                  value={userInfo.firstName}
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
              {registerMessage && (
                <p
                  className={styles.registerMessage}
                  style={{
                    color: registerMessage.includes("pomyślnie")
                      ? "green"
                      : "red",
                  }}
                >
                  {registerMessage}
                </p>
              )}
            </div>
          )}

          {/* Formularz logowania */}
          {active === "zaloguj" && (
            <div className={styles.form}>
              <h2>Zaloguj się</h2>
              <input
                type="text"
                placeholder="Login"
                name="logLogin"
                value={loginInfo.logLogin}
                onChange={handleLoginChange}
              />
              <input
                type="password"
                placeholder="Hasło"
                name="logPassword"
                value={loginInfo.logPassword}
                onChange={handleLoginChange}
              />
              <div className={styles.btnBox}>
                <button onClick={handleLoginUser}>Zaloguj</button>
              </div>
              {loginMessage && (
                <p className={styles.loginMessage}>{loginMessage}</p>
              )}
              {isOpen && (
                <div className={styles.overlay}>
                  <div className={styles.modal}>
                    <h2 className={styles.title}>Użytkownik zalogowany!</h2>

                    <Link to={"/"}>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/"); // przeniesie na stronę główną
                          window.location.reload();
                        }}
                        className={styles.closeBtn}
                      >
                        Powrót na stronę główną
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
