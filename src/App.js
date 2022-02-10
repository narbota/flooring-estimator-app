import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Detail from './Detail';
import Estimator from './Estimator';
import Wood from './Wood';

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Estimator</Link>
          </li>
          <li>
            <Link to="/Wood">Wood</Link>
          </li>
          <li>
            <Link to="/Detail">Detail</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Estimator />}></Route>
        <Route path="/Wood" element={<Wood />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}
