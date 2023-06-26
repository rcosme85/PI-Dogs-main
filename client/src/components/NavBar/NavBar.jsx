import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/create">FORM </NavLink>
    </div>
  );
}

export default NavBar