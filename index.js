import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/Menu';
import Cart from './components/Cart';
import {provider} from "react-redux";
import store from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <provider store={store}>
    <Menu />
  </provider>
  
);

