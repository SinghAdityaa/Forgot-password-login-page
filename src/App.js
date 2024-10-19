// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneNumber from './components/PhoneNumber';
import OtpVerification from './components/OtpVerification';
import NewPassword from './components/NewPassword';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PhoneNumber />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
