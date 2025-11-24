import styles from "./Account.module.scss";

const Account = ({ currentUserData }) => {
  console.log(currentUserData);
  if (!currentUserData) return <p>Ładowanie danych...</p>;
  const { firstName, lastName, adress } = currentUserData;

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Informacje dotyczące konta</h1>
        <div className={styles.cont2}>
          <div className={styles.wrapper}>
            <h3>Imię:</h3>
            <p>{firstName}</p>
          </div>
          <div className={styles.wrapper}>
            <h3>Nazwisko:</h3>
            <p>{lastName}</p>
          </div>
          <div className={styles.wrapper}>
            <h3>Adres:</h3>
            <p>{adress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
