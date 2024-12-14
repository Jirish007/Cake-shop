import React, {lazy,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import BankingDetails from './components/BankingDetails';
import './index.css';
const Shopsite= lazy(()=>import("./components/Shopsite"))

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='shopsite' element={<Shopsite/>}></Route>
        <Route path="/checkout" element={<BankingDetails />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
