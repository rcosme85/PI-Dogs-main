import styles from "./Default.module.css";

export default function Default() {
  return (
    <div className={styles.container}>
      <h3>No se encontraron datos...</h3>
      <div className={styles.default}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
