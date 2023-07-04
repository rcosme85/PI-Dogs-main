//import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getDogById } from "../../redux/action";
import styles from "./Detail.modules.css";
//const URL_ALL = "http://localhost:3001/dogs/";

const Detail = () => {
  const { id } = useParams();
   const dispatch = useDispatch();
 const dogId = useSelector((state) => state.dog);
  //const [dog, setDog] = useState({});

  /* const getDog = async (id) => {
    try {
        const dogId = (await axios.get(`http://localhost:3001/dogs/${id}`))
          .data;
        setDog(dogId);
    } catch (error) {
      throw new Error(error.message)
    }
  } */
  
  useEffect(() => {
    /*  axios.get(`${URL_ALL}${id}`).then(({ data }) => {
       if (data) {
              setDog(data);
           } // window.alert('No hay Dogs con ese ID');
       }) */
    // getDog(id)
    dispatch(getDogById(id));
    /* return () => {
      dispatch(cleanDetail())
    } */
    //return setDog({});
  }, [id]);
  //console.log(dogId);
  //console.log(dogId.name);
  /* const handleOnClick = (event) => {
    event.preventDefault();
    dispatch(getDogById(id))
  }; */
  return (
    <div className={styles.container}>
      <div>
        <h1>DETAIL OF DOG</h1>
        <h2>{dogId.id}</h2>
        <h2>{dogId.name}</h2>
      </div>

      <div>
        <img src={dogId.image} alt={dogId.name} />
      </div>
      <div>
        <h3>Weight | {dogId.weight}</h3>
        <h3>Height | {dogId.height}</h3>
        <h3>Life Span | {dogId.life_span}</h3>
        <h3>Temperaments | {dogId.Temperament}</h3>
      </div>

      {/* <div>
        <button type="submit" onClick={handleOnClick}>
          Refresh
        </button>
      </div> */}

      <div>
        <NavLink to="/home">
          <button>Volver</button>
          {/* <button className={styles.container.button}>Home</button> */}
        </NavLink>
      </div>
    </div>
  );
};

export default Detail;
