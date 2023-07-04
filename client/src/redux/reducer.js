//import { GET_DOGS } from "./action";
import { GET_ALL_DOGS, GET_DOGS_NAME, GET_DOGS_ID, ORDER_ORIGEN, ORDER_AZ, ORDER_WEIGHT, GET_TEMPERAMENTS, GET_DOGS_TEMPERAMENTS } from "./action";

const initialState = {
  dogs: [],
  dog:{},
  dogsCopy: [],
  temperaments: []
  
}
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    /* case GET_DOGS:
      return { ...state, dogs: payload, dogsCopy: payload }; */

    case GET_ALL_DOGS:
      return { ...state, dogs: payload, dogsCopy: payload };

    case GET_DOGS_NAME:
      return { ...state, dogs: payload };

    case GET_DOGS_ID:
      return { ...state, dog: payload };

    case GET_TEMPERAMENTS:
      return { ...state, temperaments: payload };
    
    case GET_DOGS_TEMPERAMENTS:
      return { ...state, dogs: payload };
    
    case ORDER_ORIGEN:
      let orderedOrigen = [];
      const dogsFilter = [...state.dogsCopy];
      if (payload === "All") {
        orderedOrigen = dogsFilter.filter(
          (dog) => dog.created === false || dog.created === true
        );
      } else if (payload === "Existing") {
        orderedOrigen = dogsFilter.filter((dog) => dog.created === false);
      } else if (payload === "Created") {
        orderedOrigen = dogsFilter.filter((dog) => dog.created === true);
      }

      return { ...state, dogs: orderedOrigen };

    case ORDER_AZ:
      let orderedDogs = [];
      const dogsOrder = [...state.dogs];
      // console.log(payload);
      if (payload === "A-Z") {
        // orderedDogs = state.dogs.sort((a, b) => a.name - b.name);
        orderedDogs = dogsOrder.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
      } else if (payload === "Z-A") {
        orderedDogs = dogsOrder.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          return 0;
        });
      }
      return {
        ...state,
        dogs: orderedDogs,
      };

    case ORDER_WEIGHT:
      let orderedWeight = [];
      const dogsOrderWeight = [...state.dogs];
      // console.log(payload);
      if (payload === "+Weight") {
        console.log(payload);
        // orderedDogs = state.dogs.sort((a, b) => a.name - b.name);
        orderedWeight = dogsOrderWeight.sort((a, b) => {
          if (a.weight > b.weight) return -1;
          if (a.weight < b.weight) return 1;
          return 0;
        });
      } else if (payload === "-Weight") {
        orderedWeight = dogsOrderWeight.sort((a, b) => {
          if (a.weight < b.weight) return -1;
          if (a.weight > b.weight) return 1;
          return 0;
        });
      }
      console.log(orderedWeight);
      return {
        ...state,
        dogs: orderedWeight,
      };
    default:
      return { ...state };
  }
}
