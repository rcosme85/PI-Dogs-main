import styles from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles.card}>

      <Link to={`/detail/${props.id}`}>

        <div className={styles.dataContainer}>
          {/* <h2>id: {props.id}</h2> */}
          <h2 className={styles.dataContainer.h2}>Name: {props.name}</h2>
          <h4 className={styles.dataContainer.h4}>
            Temperament: {props.temperament}
          </h4>
          <h4>Weight: {props.weight}</h4>

          {/* <p>Altura: {props.altura}</p>*/}

          {/* <p>Life_span: {props.life_span}</p> */}
        </div>

        <div className={styles.container.img}>
          <img className={styles.img} src={props.image} alt="Imagen" />
        </div>

      </Link>

    </div>
  );
}

export default Card