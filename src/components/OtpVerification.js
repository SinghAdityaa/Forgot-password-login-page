// src/components/OtpVerification.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add logic to verify OTP here
    navigate('/new-password'); // Navigate to password reset page
  };

  return (
    <div className="container">
      <h2>Almost there!</h2>
      <p>Please enter the OTP code sent to your phone number.</p>
      <form onSubmit={handleOtpSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button type="submit">Verify</button>
      </form>
      <p>Didn't receive any code? <button>Resend Again</button></p>
    </div>
  );
};

export default OtpVerification;
