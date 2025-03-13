import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DSA from './pages/Dsa';
import Buy from './pages/BuyCourse';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dsa" element={<App />} />
      <Route path="/dsa/buyCourse" element={<Buy/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);

reportWebVitals();
