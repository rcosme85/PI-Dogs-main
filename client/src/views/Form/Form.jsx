import React from "react";
import validation from "./validation";
import { useSelector } from "react-redux";

//const img = ""
const Form = () => {
  const temperaments = useSelector((state) => state.temperaments);
  
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
  
  
  
  var list = document.getElementById("list");
  const tempeArr = []
  
  const handleTemperaments = (event) => {
    if (event.target.value !== "Temperaments") {
      const tempe = event.target.value
      const arrTempe = tempe.split("-")
      const id = +arrTempe[0]
      const nameTempe = arrTempe[1]
      const tempeSelect = { id: id, name: nameTempe }
       tempeArr.push(tempeSelect)
     // var list = document.getElementById("list");
      list.innerHTML += `
      <div id=${nameTempe}>
          <label>
              <input type= "checkbox" id=${id}}>
                ${tempe}
          </label>
       </div>
          
          `;
         
    }
    
    
     list.addEventListener('click', (event) => {
       if (event.srcElement.nodeName === "INPUT") {
        // console.log(event)
         const rpta = event.srcElement.checked
         const idCheck = parseInt(event.target.id)
        // console.log(event.srcElement)
         console.log(idCheck)
        console.log(rpta)
      }
    })
  };
  const handleSubmit = () => {
    if (tempeArr.length) {
     // const tempeChecked = []
      
      
      //console.log(tempeChecked)
    }

  };

  return (
   
    <div>
      <div>
        <h1>Create your Bread</h1>
      </div>

      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={dogData.name}
          placeholder="Enter name..."
          onChange={handleChange}
        />
        <p>{errors.name ? errors.name : null}</p>
        {/* HEIGHT */}
        <label>Height - Min: </label>
        <input
          type="text"
          name="heightMin"
          value={dogData.heightMin}
          placeholder="Min"
          onChange={handleChange}
        />
        <p>{errors.heightMin ? errors.heightMin : null}</p>
        <label>Max: </label>
        <input
          type="text"
          name="heightMax"
          value={dogData.heightMax}
          placeholder="Max"
          onChange={handleChange}
        />
        <label>cm</label>
        <p>{errors.heightMax ? errors.heightMax : null}</p>

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
          <p>{errors.weightMin ? errors.weightMin : null}</p>
          <label>Max: </label>
          <input
            type="text"
            name="weightMax"
            value={dogData.weightMax}
            placeholder="Max"
            onChange={handleChange}
          />
          <label>cm</label>
          <p>{errors.weightMax ? errors.weightMax : null}</p>
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
          <p>{errors.lifeSpanMin ? errors.lifeSpanMin : null}</p>
          <label>Max: </label>
          <input
            type="text"
            name="lifeSpanMax"
            value={dogData.lifeSpanMax}
            placeholder="Max"
            onChange={handleChange}
          />
          <label>cm</label>
          <p>{errors.lifeSpanMax ? errors.lifeSpanMax : null}</p>
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
        <p>{errors.image ? errors.image : null}</p>
        <div>
          <img src={dogData.image} alt={dogData.name} />
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
        <div id="list">

        </div>
        <div>
          <button onClick={handleSubmit}>Create Dog</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
