import styles from "./CardsContainer.module.css";
import Card from "../Card/Card"


const CardsContainer = ({ dogs }) => {
   
   if (!Array.isArray(dogs)) {
     dogs = [dogs];
  }
  //const dogsList = dogs
   return (
     <div className={styles.container}>
      
       {dogs?.map((dog) => {
         return (
           <Card
             key={dog.id}
             id={dog.id}
             name={dog.name}
             temperament={dog.Temperament}
             height={dog.height}
             weight={dog.weight}
             life_span={dog.life_span}
             image={dog.image}
           />
         );
       })}
     </div>
   );
 };

export default CardsContainer



/* const CardsContainer = () => {
  let dogs = useSelector(state=>state.dogs)
   if (!Array.isArray(dogs)) {
    dogs = [dogs]
  } 
  return (
    <div className={styles.container}>
      
      {dogs?.map((dog) => {
        return (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            //temperament={dog.temperament}
            //height={dog.height}
           // weight={dog.weight}
            life_span={dog.life_span}
            //image={dog.image.url}
          />
        );
      })}
    </div>
  )
} */