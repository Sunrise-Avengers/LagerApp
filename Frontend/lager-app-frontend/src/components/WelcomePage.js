// WelcomePage.js
import React from 'react';
import LoginForm from './LoginForm';

const WelcomePage = () => {
  const handleLogin = () => {
    // Do something after login, e.g., navigate to another page
    console.log('Login successful!');
  };

  return (
    <div>
      <h1>Welcome to Sunrise's Lager App</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default WelcomePage;
