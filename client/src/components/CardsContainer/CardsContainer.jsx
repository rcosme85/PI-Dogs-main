import styles from "./CardsContainer.module.css";
import Card from "../Card/Card"
import { useSelector } from "react-redux/es/hooks/useSelector";

const CardsContainer = () => {
  const dogs = useSelector(state=>state.dogs)
  
  return (
    <div className={styles.container}>
      {dogs?.map((dog) => {
        return (
          <Card
            id={dog.id}
            name={dog.name}
            temperament={dog.temperament}
            altura={dog.height.metric}
            peso={dog.weight.metric}
            life_span={dog.life_span}
            image={dog.image?.url}
          />
        );
      })}
    </div>
  )
}

export default CardsContainer