import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import PasswordResetPage from './components/PasswordResetPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import ProfileDetailsPage from './components/ProfileDetailsPage';
import ImageUploadPage from './components/ImageUploadPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <WelcomePage></WelcomePage>
        </header>
        <Routes>
            <Route path="/welcome-page" component={WelcomePage} />
            <Route path="/password-reset" component={PasswordResetPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/profile-details/:username" element={<ProfileDetailsPage />} />
            <Route path="/image-upload" component={ImageUploadPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;