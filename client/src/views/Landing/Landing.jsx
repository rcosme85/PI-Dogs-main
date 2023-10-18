import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.dataContainer.h1}> */}
      <div className={styles.containerTitulo}>
        <h1 className={styles.titulo}>Cute and Cuddly Dogs</h1>
      </div>

      <div className={styles.buttonContainer}>
        <NavLink to="/home">
          <button className={styles.button}>Enter</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
