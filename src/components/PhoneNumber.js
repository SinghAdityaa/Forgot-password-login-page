// src/components/PhoneNumber.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send OTP here
    navigate('/otp-verification'); // Navigate to OTP page
  };

  return (
    <div className="container">
      <h2>Forgot Password?</h2>
      <p>Please enter your phone number that is linked with your account.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
        />
        <button type="submit">Send Code</button>
      </form>
    </div>
  );
};

export default PhoneNumber;
