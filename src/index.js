import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {BrowserRouter} from "react-router-dom";
import axios from 'axios'

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = 'http://localhost:8080';
}
if (process.env.NODE_ENV !== "development") {
  axios.defaults.baseURL = 'https://avchemapi.opentennis.pro'
  console.log = () => {}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
