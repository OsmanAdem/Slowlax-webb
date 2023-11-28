import React, { useState } from 'react';

const Membership = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här kan du lägga till kod för att hantera formulärinskick
    console.log({
      firstName,
      lastName,
      address,
      postalCode,
      city,
      mobileNumber,
      email
    });
  };

  return (
    <div className="membership-container">
      <h2>Är du inte medlem?</h2>
      <p>Bli medlem och få tillgång till alla våra tjänster och förmåner!</p>
      <form className="membership-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Förnamn:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Förnamn"
            required
          />
        </div>
        <div className="form-group">
          <label>Efternamn:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Efternamn"
            required
          />
        </div>
        <div className="form-group">
          <label>Adress:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Adress"
            required
          />
        </div>
        <div className="form-group">
          <label>Postkod:</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Postkod"
            required
          />
        </div>
        <div className="form-group">
          <label>Ort:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ort"
            required
          />
        </div>
        <div className="form-group">
          <label>Mobilnummer:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Mobilnummer"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Bli medlem</button>
        </div>
      </form>
    </div>
  );
};

export default Membership;

