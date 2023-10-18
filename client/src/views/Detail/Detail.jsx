//import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getDogById } from "../../redux/action";
import styles from "./Detail.module.css";
//const URL_ALL = "http://localhost:3001/dogs/";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 const dogId = useSelector((state) => state.dog);
 
  
  useEffect(() => {
   
    dispatch(getDogById(id));
    /* return () => {
      dispatch(cleanDetail())
    } */
    
  }, [id]);
  
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>DETAIL OF DOG</h1>
          <h2 className={styles.dataContainer.h2}>{dogId.id}</h2>
          <h2>{dogId.name}</h2>
        </div>
        <div className={styles.dataContainer.h3}>
          <h3>Weight | {dogId.weight}</h3>
          <h3>Height | {dogId.height}</h3>
          <h3>Life Span | {dogId.life_span}</h3>
          <h3>Temperaments | {dogId.Temperament}</h3>
        </div>

        <div className={styles.container.img}>
          <img className={styles.img} src={dogId.image} alt={dogId.name} />
        </div>
        
      </div>

      <hr />
      <div>
        <NavLink to="/home">
          <button className={styles.button}>Volver</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Detail;
