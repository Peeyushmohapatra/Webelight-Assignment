import { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { getReops } from "./Functions/functions";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Graph from "./Components/Graph/Graph";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getReops(dispatch)
  },[dispatch])
  return <div className="App">
    <Navbar/>
    
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="graph/:login/:repo" element={<Graph/>} />
    </Routes>
  </div>;
}

export default App;
