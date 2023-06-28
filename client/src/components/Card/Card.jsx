import styles from "./Card.module.css"
const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.dataContainer}>
        { <h2>id: {props.id}</h2>}
        <h2 className={styles.dataContainer.h2}>Name: {props.name}</h2>
        <h4 className={styles.dataContainer.h4}>
          Temperamento: {props.temperament}
        </h4>
        <h4>Peso: {props.peso}</h4>
        {/* <p>Altura: {props.altura}</p>
        
        <p>Life_span: {props.life_span}</p> */}
      </div>
      <div className={styles.container.img}>
        <img className={styles.img} src={props.image} alt="Imagen" />
      </div>
    </div>
  );
}

export default Card