import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Membership from './Membership';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/my-component" element={<MyComponent />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;


