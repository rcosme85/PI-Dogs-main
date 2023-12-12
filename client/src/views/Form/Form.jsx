import React from "react";
import axios from "axios";
import validation from "./validation";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
//import { useDispatch } from "react-redux";
import styles from "./Form.module.css";

const Form = () => {
  const temperaments = useSelector((state) => state.temperaments);
  //const dispatch = useDispatch();

  const [dogData, setDogData] = React.useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    lifeSpanMin: "",
    lifeSpanMax: "",
    image: "",
  });
  const [errors, setErrors] = React.useState({});

// Al digitar un input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDogData({
      ...dogData,
      [name]: value,
    });
    setErrors(
      validation({
        ...dogData,
        [name]: value,
      })
    );
  };
  
  const tempeArr = []
  let tempeChecked = []
  let bodyDog = {}

  //Onchange: Al elegir una opción de temperamento del select
  const handleTemperaments = (event) => {
   var list = document.getElementById("list");
    if (event.target.value !== "Temperaments") {
      const tempe = event.target.value
      const arrTempe = tempe.split("-")
      const id = +arrTempe[0]
      const nameTempe = arrTempe[1]
      const tempeSelect = { id: id, name: nameTempe }
       tempeArr.push(tempeSelect)
     // Añade en la lista el temperamento elegido;
      list.innerHTML += `
      <div id=${nameTempe}>
          <label>
              <input type= "checkbox" id=${id}} value=${nameTempe} >
                ${tempe}
          </label>
       </div>
          `
      tempeChecked = []
      console.log("Select Tempe:")
      console.log(tempeChecked)
    } 

    list.addEventListener("click", (event) => {
          if (event.target.nodeName === "INPUT") {
              const idCheck = parseInt(event.target.id);
        const tempeValue = event.target.value 

        if (event.target.checked) {
          const idFind = tempeChecked.filter(elem => elem.id === idCheck)
          if (!idFind.length) {
             const tempeObj = { id: idCheck, name: tempeValue };
             tempeChecked.push(tempeObj);
          }
 
        } else {
          const tempeFilter = tempeChecked.filter(elem => elem.id !== idCheck)
          tempeChecked = tempeFilter
        }
            console.log("Check");
            console.log(tempeChecked)
        
      }
    });
  };
  
  
  const handleSubmit = (event) => {
    console.log("al inicio del submit");
    console.log(tempeChecked);
    event.preventDefault();
   
    //console.log(errors);
    const rptaError = Object.entries(errors).length !== 0
    if (rptaError) return alert("There are errors, a Dog cannot be created");
    //console.log("Antes del if")
    //console.log(tempeChecked);
    const rpta = tempeChecked.length
    //console.log(rpta)
    if (tempeChecked.lengt === 0)
      return alert("Missing temperament");
    
    //Verificando que todos los campos no estén en blanco
    if (!dogData.image || !dogData.name || !dogData.heightMin || !dogData.weightMin || !dogData.lifeSpanMin) {
      return alert("You must enter the complete data");
    }
    //Creando el objeto para el POST
    const idTempe = []
    for (const tempe of tempeChecked) {
      idTempe.push(tempe.id)
    }
    bodyDog = {
      Imagen: dogData.image,
      Nombre: dogData.name,
      Altura: dogData.heightMin + " - " + dogData.heightMax + " cm",
      Peso: dogData.weightMin + " - " + dogData.weightMax + " kilos",
      Anos_vida: dogData.lifeSpanMin + " - " + dogData.lifeSpanMax + " years",
      TemperamentId: idTempe
    };
    //console.log(bodyDog);
    //POST DOG - AL BACK
    postDog(bodyDog)
    setDogData({
      name: "",
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
      lifeSpanMin: "",
      lifeSpanMax: "",
      image: "",
    });
  };
  //Funcion para POST a Dog 
  const postDog = async (bodyDog) => {
    const URL_ALL = "http://localhost:3001/dogs/";
    try {
      const postDog = (await axios.post(URL_ALL, bodyDog)).data;
      if (postDog) return alert("dog created");
      console.log(postDog)
    } catch (error) {
      throw Error(error.message);
    }
  }

  return (
    <div >
      <div>
        <h1>Create your Bread</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={dogData.name}
            placeholder="Enter name..."
            onChange={handleChange}
          />
          <p className={styles.error}>{errors.name ? errors.name : null}</p>
          {/* HEIGHT */}
          <label>Height - Min: </label>
          <input
            className={styles.container.input}
            type="text"
            name="heightMin"
            value={dogData.heightMin}
            placeholder="Min"
            onChange={handleChange}
          />
          <p className={styles.error}>
            {errors.heightMin ? errors.heightMin : null}
          </p>
          <label>Max: </label>
          <input
            type="text"
            name="heightMax"
            value={dogData.heightMax}
            placeholder="Max"
            onChange={handleChange}
          />
          <label> cm.</label>
          <p className={styles.error}>
            {errors.heightMax ? errors.heightMax : null}
          </p>

          {/* WEIGHT */}
          <div>
            <label>Weight - Min: </label>
            <input
              type="text"
              name="weightMin"
              value={dogData.weightMin}
              placeholder="Min"
              onChange={handleChange}
            />
            <p className={styles.error}>
              {errors.weightMin ? errors.weightMin : null}
            </p>
            <label>Max: </label>
            <input
              type="text"
              name="weightMax"
              value={dogData.weightMax}
              placeholder="Max"
              onChange={handleChange}
            />
            <label> Kl.</label>
            <p className={styles.error}>
              {errors.weightMax ? errors.weightMax : null}
            </p>
          </div>
          {/* LIFE_SPAN */}
          <div>
            <label>Life Span - Min: </label>
            <input
              type="text"
              name="lifeSpanMin"
              value={dogData.lifeSpanMin}
              placeholder="Min"
              onChange={handleChange}
            />
            <p className={styles.error}>
              {errors.lifeSpanMin ? errors.lifeSpanMin : null}
            </p>
            <label>Max: </label>
            <input
              type="text"
              name="lifeSpanMax"
              value={dogData.lifeSpanMax}
              placeholder="Max"
              onChange={handleChange}
            />
            <label> years.</label>
            <p className={styles.error}>
              {errors.lifeSpanMax ? errors.lifeSpanMax : null}
            </p>
          </div>
          {/* Image */}
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={dogData.image}
            placeholder="Enter URL image..."
            onChange={handleChange}
          />
          <p className={styles.error}>{errors.image ? errors.image : null}</p>
          <div>
            <img
              className={styles.container.img}
              src={dogData.image}
              alt={dogData.name}
            />
          </div>
          <select name="TEMPE" id="TEMPE" onChange={handleTemperaments}>
            <option value="Temperaments">Temperaments</option>
            {temperaments?.map((elem) => {
              return (
                <option key={elem.Id} value={elem.Id + "-" + elem.Nombre}>
                  {elem.Id + "-" + elem.Nombre}
                </option>
              );
            })}
          </select>
          <div id="list"></div>
          <div className={styles.container.button}>
            <button type="Submit">Create Dog</button>
          </div>
          <div>
            <NavLink to="/home">
              <button>Volver</button>
              {/* <button className={styles.container.button}>Home</button> */}
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
