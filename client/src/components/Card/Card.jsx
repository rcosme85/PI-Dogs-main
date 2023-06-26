import styles from "./Card.module.css"
const Card = (props) => {
  return (
    <div className={styles.card}>
      <p>id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Altura: {props.altura}</p>
      <p>Peso: {props.peso}</p>
      <p>Imagen: {props.imagen}</p>
      <p>Life_span: {props.life_span}</p>
    </div>
  );
}

export default Card