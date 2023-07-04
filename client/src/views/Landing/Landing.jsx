import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1>Esta es la vista de Landing</h1>
      <NavLink to="/home">
        <button className={styles.container.button}>Home</button>
      </NavLink>
    </div>
  );
};

export default Landing;
