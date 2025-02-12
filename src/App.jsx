import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import DetailEvent from './components/Detailevent';
import Singlevent from './components/Singlevent';
import Team from './components/Team';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailevent" element={<DetailEvent />} />

        {/* <Route path="/singleevent/:id" element={<SingleEvent />} /> */}
        <Route path="/Singlevent" element={<Singlevent />} />
        <Route path="/Team" element={<Team />} />



      </Routes>
    </Router>
  );
}

export default App;
