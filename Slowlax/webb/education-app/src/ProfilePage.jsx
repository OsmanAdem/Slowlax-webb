import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  // Simulera användardata (du kan hämta detta från ditt system)
  const user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    profileImage: 'https://example.com/profile-image.jpg', // Lägg till en länk till användarens profilbild
    firstName: 'John', // Lägg till användarens förnamn
    lastName: 'Doe', // Lägg till användarens efternamn
  };

  return (
    <div className="profile-container">
      <h2>Mitt konto</h2>
      <div className="profile-info">
        <img src={user.profileImage} alt="Profilbild" className="profile-image" />
        <div>
          <p>
            Inloggad som: {user.firstName} {user.lastName}
          </p>
          <p>Användarnamn: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

