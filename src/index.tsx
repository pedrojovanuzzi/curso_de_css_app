import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import { Aula1 } from './pages/Aula1/Aula1';
import { Aula2 } from './pages/Aula2/Aula2';
import { Aula3 } from './pages/Aula3/Aula3';
import { Aula4 } from './pages/Aula4/Aula4';
import { Aula5 } from './pages/Aula5/Aula5';
import { Aula6 } from './pages/Aula6/Aula6';
import { Aula7 } from './pages/Aula7/Aula7';
import { Aula8 } from './pages/Aula8/Aula8';
import { Aula8Item1 } from './pages/Aula8/Aula8_ItemsRedirect/Aula8_Item1';
import { Aula8Item2 } from './pages/Aula8/Aula8_ItemsRedirect/Aula8_Item2';
import { Aula8Item3 } from './pages/Aula8/Aula8_ItemsRedirect/Aula8_Item3';
import { Aula9 } from './pages/Aula9/Aula9';
import { Aula10 } from './pages/Aula10/Aula10';
import { Aula11 } from './pages/Aula11/Aula11';
import { About } from './pages/Aula11/pages/About';
import { Contact } from './pages/Aula11/pages/Contact';
import { Contract } from './pages/Aula11/pages/Contract';


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
        <Route path="/aula3" element={<Aula3 />} />
        <Route path="/aula4" element={<Aula4 />} />
        <Route path="/aula5" element={<Aula5 />} />
        <Route path="/aula6" element={<Aula6 />} />
        <Route path="/aula7" element={<Aula7 />} />
        <Route path="/aula8" element={<Aula8 />} />
        <Route path="/aula8_item1" element={<Aula8Item1 />} />
        <Route path="/aula8_item2" element={<Aula8Item2 />} />
        <Route path="/aula8_item3" element={<Aula8Item3 />} />
        <Route path="/aula9" element={<Aula9 />} />
        <Route path="/aula10" element={<Aula10/>} />

        <Route path="/aula11" element={<Aula11/>} />
        <Route path="/aula11_home" element={<Aula11/>} />
        <Route path="/aula11_about" element={<About/>} />
        <Route path="/aula11_contact" element={<Contact/>} />
        <Route path="/aula11_contrato" element={<Contract/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
