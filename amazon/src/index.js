import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataProvider } from './components/DataProvider/DataProvider';
import {} from './Utility/action.type'
import { reducer, initialState } from './Utility/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <DataProvider reducer = {reducer} initialState = {initialState} >
    <App />
    </ DataProvider >
  </React.StrictMode>
);

