import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDogs } from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs())
  },[dispatch])

  return (
    <div>
      <h3>List of Dogs</h3>
      <CardsContainer/>
    </div>
  )
}

export default Home