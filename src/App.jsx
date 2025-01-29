import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import DetailEvent from './components/Detailevent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailevent" element={<DetailEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
