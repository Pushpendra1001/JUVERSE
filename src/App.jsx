import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from "./components/Dashbored"; // Capitalized component name
import Home from './components/Home/Home';
import DetailEvent from './components/Detailevent';
<<<<<<< Updated upstream
=======
import Singlevent from './components/Singlevent';
import Team from './components/Team';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailevent" element={<DetailEvent />} />
<<<<<<< Updated upstream
=======
        <Route path="/Singlevent/:eventName" element={<Singlevent />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Fixed usage */}
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
