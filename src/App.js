import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shopsite from './components/Shopsite';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='shopsite' element={<Shopsite/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
