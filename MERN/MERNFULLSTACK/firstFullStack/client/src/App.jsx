import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Form from './components/Form'
import Home from './views/Home';
import Details from './views/Details';
import Navbar from './components/Navbar';
import Update from './components/Update';

function App() {

  
   // declaring the state
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        
        <Route path='/student/add' element={<Form />} />
        
        <Route path="/student/:id" element={<Details />}/>
        <Route path="/student/edit/:id" element={<Update />}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
