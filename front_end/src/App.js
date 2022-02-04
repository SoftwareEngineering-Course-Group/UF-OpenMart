import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
