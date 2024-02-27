
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Car from './pages/Car'
import About from './pages/About'
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
     
      <Route path='/about' element={<About/>}/>
      <Route path='/car' element={<Car/>}/>
      <Route path ='/services' element={<Services/>}/>
    </Routes>
   
    </BrowserRouter>
 
    </div>
  );
}

export default App;
