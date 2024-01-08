import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Landing from './components/pages/landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        </Routes>
      </Router>
  );
}

export default App;
