import './App.css';
import Home from "./views/Home/Home"
import Landing from "./views/Landing/Landing"
import Form from "./views/Form/Form"
import Detail from "./views/Detail/Detail"
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, useLocation } from "react-router-dom";


function App() {
   const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" ? <NavBar/> : null}
      <hr />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
