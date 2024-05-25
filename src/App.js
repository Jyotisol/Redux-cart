import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardsdeatils from "./components/Cardsdetail";
import Cards  from "./components/Cards";
import {Routes, Route} from "react-router-dom";
import "./style.css";
function App ()  {
  return (
    <div className="App">
      <Header/>
      <Routes>
         
          <Route path='/' element={<Cards/>}></Route>
          <Route path='/cart/:id' element={<Cardsdeatils/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
