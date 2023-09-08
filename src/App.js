import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from './pages/home';
import Contato from './pages/contato/contato';
import Fotos from "./pages/fotos/fotos"
import Comentarios from './pages/comentarios/comentarios';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Fotos' element={< Fotos />} />
        <Route path='/Comentarios' element={< Comentarios />} />
      </Routes>
    </BrowserRouter>
  )
  }

export default App
