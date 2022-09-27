import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Habitaciones from './pages/Habitaciones';
import Habitacion from './pages/Habitacion';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/habitaciones' element={<Habitaciones/>}/>
      <Route path='/habitaciones/:id' element={<Habitacion/>}/>
      <Route path='/*' element={<Error404/>}/>
      <Route path='/' element={<Navigate replace to="/home"/>}/>
    </Routes>
  </BrowserRouter>
);
