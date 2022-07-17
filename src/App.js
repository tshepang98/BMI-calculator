import React from 'react';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Login-Page/Login.js';
import Navigation from './Navigation/Navigation.js';
import DiffOption from './DiffOption/DiffOption';
import BMI from './BMI_Calculator/BMI';
import NewCustomer from './NewCustomer/NewCustomer';
import UpLoad from './UpLoad/UpLoad.js';
import ExistingCustomer from './ExistingCustomer/ExistingCustomer.js';
function App() {
  return(
      <Router>
        <Navigation/>
          <Routes>
            <Route path ='/' element ={<Login/>}/>
            <Route path='/options' element ={<DiffOption/>}/>
            <Route path='/calculate' element ={<BMI/>}/>
            <Route path='/upload' element ={<UpLoad/>}/>
            <Route path='/new' element ={<NewCustomer/>}/>
            <Route path='/exist' element ={<ExistingCustomer/>}/>

          </Routes>
      </Router>

);}

export default App;
