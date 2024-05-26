import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import Order from "./Order";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path ="/" element = {<App />}>

  </Route>
  <Route path="/order" element ={<Order />}></Route>
 </Routes>
 </BrowserRouter>
 
);

