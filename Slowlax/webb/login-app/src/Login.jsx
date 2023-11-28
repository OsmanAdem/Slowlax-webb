import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
      setLoginAttempted(true);
    } else {
      setLoginAttempted(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setLoginAttempted(false);
  };

  return (
    <div className="login-container">
      <h1 className="slowlax">SLOWLAX</h1>
      <h3 className="logga-in">LOGGA IN</h3>
      <p>Logga in med din e-postadress</p>
      {loggedIn ? (
        <div>
          <p className="welcome-message">Välkommen, {username}!</p>
          <button className="logout-button" onClick={handleLogout}>Logga ut</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`login-input ${loginAttempted && !username ? 'invalid-input' : ''}`}
          />
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`login-input ${loginAttempted && !password ? 'invalid-input' : ''}`}
          />
          {loginAttempted && username && password && (
            <p className="error-message">Fel användarnamn eller lösenord</p>
          )}
          <div className="login-buttons">
            <button className="login-button" onClick={handleLogin}>Logga in</button>
            <br />
            <br />
            <Link to="/forgot-password" className="forgot-password">Glömt lösenord?</Link>
            <br />
            <br />
            <Link to="/membership" className="not-member">Är du inte medlem?</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;


