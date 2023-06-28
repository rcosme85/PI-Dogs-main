import axios from "axios";
export const GET_DOGS = "GET_DOGS"
const URL = "https://api.thedogapi.com/v1/breeds";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      const dogsApi = (await axios.get(`${URL}`)).data;
      if(!dogsApi.length) throw Error ("No hay dogs")
      return dispatch({ type: GET_DOGS, payload: dogsApi });
    } catch (error) {
      throw Error(error.message)
    }
  }
}