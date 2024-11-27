import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import { Aula1 } from './components/Aula1/Aula1';
import { Aula2 } from './components/Aula2/Aula2';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aula1" element={<Aula1 />} />
        <Route path="/aula2" element={<Aula2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
