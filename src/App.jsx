// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Evenement from './components/Evenement';
import Experts1 from './components/Experts1';
import Expert from './components/Expert';
import expertsData from './components/data';
import Nav from './components/nav';
import Formulaire from './components/Formulaire'
function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
        <Routes>
          <Route path="/" element={<h2>Welcome to the Experts App</h2>} />
          <Route path="/events" element={<Evenement evenement={expertsData[0]} />} />
          <Route path="/experts" element={<Experts1 />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/formulaire " element={<Formulaire />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
