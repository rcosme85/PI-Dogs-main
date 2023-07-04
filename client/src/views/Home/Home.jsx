import CardsContainer from "../../components/CardsContainer/CardsContainer"
import Default from "../../components/Default/Default";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux"
import { getAllDogs } from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
 // const dogsCopy = useSelector((state) => state.dogsCopy);
  
  useEffect(() => {
   dispatch(getAllDogs());
    //dispatch(getDogByName());
    
  },[])

  return (
    <div>
      {/* <NavBar handleChange={handleChange} handleOnClick={handleOnClick } /> */}
      <h3>List of Dogs</h3>
      { dogs.length
        ? < CardsContainer dogs={dogs} />
        : <Default />
      }
    </div>
  )
}

export default Home