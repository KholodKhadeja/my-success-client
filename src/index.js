import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider Store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);

reportWebVitals();
