import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ReactTable } from './components/FlightsTable';
import { FlightDetail } from './components/FlightDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<ReactTable />}></Route>
        <Route path='/:id' element={<FlightDetail />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
