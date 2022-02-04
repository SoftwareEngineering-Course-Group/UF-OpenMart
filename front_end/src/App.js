import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
