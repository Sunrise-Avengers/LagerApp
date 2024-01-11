import React from 'react';

const ProfileDetailsPage = ({ location }) => {
  // Überprüfe, ob location und location.state vorhanden sind
  if (!location || !location.state || !location.state.userData) {
    // Wenn keine Benutzerdaten vorhanden sind, zeige eine Fehlermeldung oder leite um
    return <div>Error: Benutzerdaten nicht gefunden</div>;
  }

  // Konvertiere den JSON-String zu einem JavaScript-Objekt
  const userObject = JSON.parse(location.state.userData);

  const {
    username,
    vorname,
    nachname,
    fachrichtung,
    lehrstart,
    jahrgang,
    password
  } = userObject;

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <h2>Details deines Profils:</h2>
      <ul>
        <li>Vorname: {vorname}</li>
        <li>Nachname: {nachname}</li>
        <li>Fachrichtung: {fachrichtung}</li>
        <li>Lehrstart: {lehrstart}</li>
        <li>Jahrgang: {jahrgang}</li>
        <li>Password: {password}</li>
      </ul>
    </div>
  );
};

export default ProfileDetailsPage;
