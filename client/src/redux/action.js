import axios from "axios";
export const GET_DOGS = "GET_DOGS"
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOGS_NAME = "GET_DOGS_NAME"
export const GET_DOGS_ID = "GET_DOGS_ID";
export const GET_DOGS_TEMPERAMENTS = "GET_DOGS_TEMPERAMENTS";
export const ORDER_ORIGEN = "ORDER_ORIGEN";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_WEIGHT = "ORDER_WEIGHT";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
//export const POST_DOG = "POST_DOG";
//const URL = "https://api.thedogapi.com/v1/breeds";
const URL_ALL = "http://localhost:3001/dogs/";
const URL_NAME = "http://localhost:3001/dogs/?name=";

/* export const getDogs = () => {
  return async function (dispatch) {
    try {
      const dogsCopy = (await axios.get(`${URL_ALL}`)).data;
      if(!dogsCopy.length) throw Error ("No hay dogs")
      return dispatch({ type: GET_DOGS, payload: dogsCopy });
    } catch (error) {
      throw Error(error.message)
    }
  }
} */


 export const getAllDogs = () => {
  return async function (dispatch) {
    try {
      const dogsAll = (await axios.get(URL_ALL)).data
      return dispatch({type: GET_ALL_DOGS, payload: dogsAll})
    } catch (error) {
      throw Error(error.message);
    }
  }
}
 export const getDogsByTemperaments = (tempeFind) => {
  return async function (dispatch) {
    try {
      const dogsTempe = (await axios.get(URL_ALL)).data
      const dogsFind = [];
      for (let tempe of dogsTempe) {
        if (tempe.Temperament?.includes(tempeFind)) {
          dogsFind.push(tempe);
        }
      }
      return dispatch({
        type: GET_DOGS_TEMPERAMENTS,
        payload: dogsFind,
      });
    } catch (error) {
       throw Error(error.message);
    }
  }
} 
export const getDogByName = (name) => {
  return async function (dispatch) {
    try {
      //const name = "Aff"
      const dogsByName = (await axios.get(`${URL_NAME}${name}`)).data;
      
      //console.log(dogsByName)
      return dispatch({ type: GET_DOGS_NAME, payload: dogsByName });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDogById = (id) => {
  return async function (dispatch) {
    try {
      //const name = "Aff"
      const dogsById = (await axios.get(`${URL_ALL}${id}`)).data;

      //console.log(dogsById)
      return dispatch({ type: GET_DOGS_ID, payload: dogsById });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
/* export const postDog = (bodyDog) => {
  return async function (dispatch) {
    try {
      const postDog = (await axios.post(URL_ALL, bodyDog)).data;
      return dispatch({ type: POST_DOG, payload: postDog });
    } catch (error) {
      throw Error(error.message);
    }
  };
}; */

export const getTemperaments = (id) => {
  return async function (dispatch) {
    try {
      const temperaments = (await axios.get("http://localhost:3001/temperaments/"))
        .data;
      return dispatch({ type: GET_TEMPERAMENTS, payload: temperaments });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
export function orderOrigen(order) {
    return {
        type: ORDER_ORIGEN,
        payload: order
    }
};

export function orderAZ(order) {
    return {
        type: ORDER_AZ,
        payload: order
    }
};

export function order_Weight(order) {
    return {
        type: ORDER_WEIGHT,
        payload: order
    }
};


/* export const getAllDogs = () => {
  return function (dispatch) {
    
 
     fetch(URL_ALL)
      .then(response => response.json())
      .then(data => { return dispatch({ type: GET_ALL_DOGS, payload: data }); })
      .cath (err => {return err.message;})
      
      
  };
}; */