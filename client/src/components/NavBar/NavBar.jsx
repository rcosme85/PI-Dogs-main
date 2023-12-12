import { NavLink, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
 import { useEffect, useState } from "react";
// import { getAllDogs} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { orderOrigen, orderAZ, order_Weight, getTemperaments, getDogsByTemperaments } from "../../redux/action";

const NavBar = () => {
    const navigate = useNavigate()
  const [aux, setAux] = useState(false);
 // const [dogsTempe, setDogsTempe] = useState([])
  const temperaments = useSelector((state)=>state.temperaments)

  const dispatch = useDispatch();

  const handleOrigen = (event) => {
    if (event.target.value !== "Dogs") {
      dispatch(orderOrigen(event.target.value));
    }
      
   // aux ? setAux(false) : setAux(true); 
  };
  
  const handleOrderAZ = (event) => {
    // console.log(event.target.value)
    if (event.target.value !== "ORDER") {
      dispatch(orderAZ(event.target.value));
      setAux(!aux);
    }
      
   };

  const handleOrder_ByWeight = (event) => {
    // console.log(event.target.value)
    if (event.target.value !== "WEIGHT") {
      dispatch(order_Weight(event.target.value));
      setAux(!aux);
    }
      
  };

  const handleFind_ByTemperaments = (event) => {
   ////falta code
    var selectDogs = document.getElementById("Dogs");
    selectDogs.value = "Dogs";
    var selectOrder = document.getElementById("ORDER");
    selectOrder.value = "ORDER";
    var selectWeight = document.getElementById("WEIGHT");
    selectWeight.value = "WEIGHT";

    if (event.target.value !== "Temperaments") {

      dispatch(getDogsByTemperaments(event.target.value));
      setAux(!aux);
    }
  }

   useEffect(() => {
     dispatch(getTemperaments());
     //dispatch(getDogByName());
   }, [dispatch]);
  
  return (
    <div className={styles.container}>
      {/*  <NavLink to="/home">
        <button className={styles.container.button} onClick={handleRefresh}>
          Home
       
        </button>
      </NavLink> */}
      {/* styles.container.button */}
      <div className={styles.containerButton}>
        <NavLink to="/">
          <button>Landing</button>
        </NavLink>
        <NavLink to="/create">
          <button>Form</button>
        </NavLink>
      </div>

      <div className={styles.selectContainer}>
        <select name="Dogs" id="Dogs" onChange={handleOrigen}>
          <option value="Dogs">Dogs</option>
          <option value="All">All</option>
          <option value="Existing">Existing-Api</option>
          <option value="Created">Created</option>
        </select>

        <select name="ORDER" id="ORDER" onChange={handleOrderAZ}>
          <option value="ORDER">Order Alphabetically</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <select name="WEIGHT" id="WEIGHT" onChange={handleOrder_ByWeight}>
          <option value="WEIGHT">Weight</option>
          <option value="+Weight">+ Weight</option>
          <option value="-Weight">- Weight</option>
        </select>

        <select name="TEMPE" id="TEMPE" onChange={handleFind_ByTemperaments}>
          <option value="Temperaments">Temperaments</option>
          {temperaments?.map((elem) => {
            return (
              <option key={elem.Id} value={elem.Nombre}>
                {elem.Nombre}
              </option>
            );
          })}
        </select>
      </div>

      <div className={styles.containerSearch}>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar