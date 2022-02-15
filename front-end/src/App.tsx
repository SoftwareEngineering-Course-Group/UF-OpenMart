import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import Add from './pages/Add';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RegisterPage from './pages/Register';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
