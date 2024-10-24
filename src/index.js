import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Shopsite from './components/Shopsite'




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
<Route path='shopsite' element={<Shopsite/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



