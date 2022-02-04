import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
