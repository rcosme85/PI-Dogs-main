import CardsContainer from "../../components/CardsContainer/CardsContainer"
import Default from "../../components/Default/Default";
//import Pagination from "@mui/material/Pagination";
import { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux"
import { getAllDogs } from "../../redux/action";
import styles from "./Home.module.css"
const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const filter = useSelector((state) => state.filter);
  const dogsFiltered = useSelector((state) => state.dogsFiltered);
 // const dogP = useSelector((state) => state.dogP);
  
  const ITEMS_PER_PAGE = 8;

  const [currentPage, setCurrentPage] = useState(1);
 
console.log("filter")
  console.log(filter)
  console.log(dogsFiltered)
 // const [datosDogs, setDatosDogs] = useState(dogs);
  const [items, setItems] = useState([])
  const [itemFiltered, setItemFiltereds] = useState([]);
 // const [items, setItems] = useState([...datosDogs].splice(0, ITEMS_PER_PAGE));
  
   /* const [itemFiltered, setItemFiltereds] = useState(
     [...dogsFiltered].splice(0, ITEMS_PER_PAGE)
   );
   console.log("itemFiltered");
  console.log(itemFiltered); */
  
 useEffect(() => {
   // setLoading(true); //cada vez que se recarga la página
   dispatch(getAllDogs());
   // setLoading(false); //cuando cargue los datos
 }, [dispatch]);
  
  
 
   useEffect(() => {
    setItems([...dogs].splice(0, ITEMS_PER_PAGE));
    setItemFiltereds([...dogsFiltered].splice(0, ITEMS_PER_PAGE));
   }, [dogs, dogsFiltered]);
  
 console.log("itemFiltered");
 console.log(itemFiltered);
  //const [loading, setLoading] = useState(true);
  //Click Next
  const nextHandler = (event) => {
    //event.preventDefault();
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    if (filter) {
        if(firstIndex>=dogsFiltered.length) return;
      setItemFiltereds([...dogsFiltered].splice(firstIndex, ITEMS_PER_PAGE))
      
         setCurrentPage(nextPage); 
    }
    const totalElementos = dogs.length;

    if (firstIndex >= totalElementos) return;
    //  setDatosDogs(dogs);

    setItems([...dogs].splice(firstIndex, ITEMS_PER_PAGE));
    console.log("First Index");
    setCurrentPage(nextPage);
    // console.log("Items");
    // console.log(items);
  };

  //Click prev
  const prevHandler = () => {
    if (currentPage === 1) return;
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * ITEMS_PER_PAGE;
    //setDatosDogs(dogs);
    if (filter) {
      setItemFiltereds([...dogsFiltered].splice(firstIndex, ITEMS_PER_PAGE));
         setCurrentPage(prevPage)
    }
    setItems([...dogs].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

 


  return (
    <div className={styles.container}>
      {/* <h2>Dog List</h2> */}
      <div className={styles.buttonContainer}>
        <button onClick={() => prevHandler()} className={styles.buttonPrev}>
          PREV
        </button>
        <button onClick={() => nextHandler()} className={styles.buttonNext}>
          NEXT
        </button>
      </div>

      <div>
        {" "}
        {dogs.length ? (
          <CardsContainer dogs={filter ? itemFiltered : items} />
        ) : (
          <Default />
        )}
      </div>
    </div>
  );
}

export default Home


 // PAGINADO DESDE EL COMPONENTE
    // const next_page = currentPage + 1;
    // const firstIndex = next_page * ITEMS_PER_PAGE;
    // if(filter){
    //   if(firstIndex>=usersFiltered.length) return;
    //   setItemFiltereds([...usersFiltered].splice(firstIndex, ITEMS_PER_PAGE))
    //   setCurrentPage(next_page);
    // }
    // if(firstIndex>=users.length) return;
    // setItems([...users].splice(firstIndex, ITEMS_PER_PAGE));
    // setCurrentPage(next_page);
    

