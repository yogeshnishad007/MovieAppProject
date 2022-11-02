
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Component/Home"
import SingleMovie from './Component/SingleMovie';
import Error from './Component/Error';
import Movies from './Component/Movies';

function App() {
  return (
    <div className="App">

      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/movie" element={<Movies/>} />

        <Route path='/singleMpvies/:id' element={<SingleMovie/>}  />
        <Route path='*' element={<Error/>}  />
      </Routes>
     
    </div>
  );
}

export default App;

