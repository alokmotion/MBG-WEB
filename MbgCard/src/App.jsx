import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contactuspage from './pages/Contactuspage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contactus" element={<Contactuspage />} />
    </Routes>
    
    </BrowserRouter>
   
  )
}

export default App