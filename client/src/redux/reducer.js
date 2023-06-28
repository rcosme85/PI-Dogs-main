import { GET_DOGS } from "./action";

const initialState = {
  dogs: [],
  
}
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DOGS:
      return { ...state, dogs: payload };
    default:
      return {...state}
  }
}
