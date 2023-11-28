import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="background-box">
        <h2>Glömt lösenord?</h2>
        <p>Ange din e-postadress nedan så skickar vi instruktioner för återställning av lösenord.</p>
        <div className="email-input">
        <input type="email" placeholder="E-postadress" />
        </div>
        <button className="forgot-button">Skicka återställningsinstruktioner</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
