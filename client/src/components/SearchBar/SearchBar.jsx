
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { getDogByName } from "../../redux/action";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    // event.preventDefault();
    const { value } = event.target;
    setName(value);
  };

  const handleOnClick = (event) => {
     var selectDogs = document.getElementById("Dogs");
    selectDogs.value = "Dogs";
    var selectOrder = document.getElementById("ORDER");
    selectOrder.value = "ORDER";
    var selectWeight = document.getElementById("WEIGHT");
    selectWeight.value = "WEIGHT";
    var selectTempe = document.getElementById("TEMPE");
    selectTempe.value = "Temperaments";
    
    dispatch(getDogByName(name));

    setName("");
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.container.input}
          value={name}
          type="text"
          name="search"
          id="search"
          placeholder="Enter name of Dog"
          // onChange={(e)=>handleChange(e)}
          onChange={handleChange}
        />
        <button
          className={styles.container.button}
          type="submit"
          onClick={handleOnClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
