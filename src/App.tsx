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
      <header className="App-header">
          {/* <ReactTable></ReactTable> */}
        {/* <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
         alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
