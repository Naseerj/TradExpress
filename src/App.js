
import './App.css';
import Navbar from './Components/Navbarr'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './Components/Landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Individual from "./Components/Individual";
import Login from './Components/Login'
import Buysell from './Components/Buysell'
import Welcome from './Components/Welcome'
import Business from './Components/Business';
import { useState } from 'react';
function App() {
  const [name,setName] = useState('Naseer')
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Landingpage />}/>     
        <Route path='/individual' element={<Individual name={name}  setName={setName}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route  path='/buysell' element={<Buysell />}/>
        <Route path='/welcome' element={<Welcome  name={name}  setName={setName}/>}  />
        <Route path='/business' element={<Business/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
