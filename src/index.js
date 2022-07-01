import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sensor from './components/sensor/Sensor';
import SimpleLineChart from './components/chart/SimpleLineChart';
import TinyBarChart from './components/chart/TinyBarChart';
import Map from './pages/map/Map';
import { WindowSize } from "./services/context/WindowSize"
import { BrowserRouter } from 'react-router-dom';
import { DarkTheme } from './services/context/DarkTheme';
// import {WindowSize} from './services/context/WindowSize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WindowSize>
      <DarkTheme>
        <App />
      </DarkTheme>
    </WindowSize>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
