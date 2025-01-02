import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import ErrorMessage from './ErrorMessage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setShowError(false);
    } else if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };

  return (
    <div className="App">
      {!isLoggedIn && (
        <div className="login-container">
          <LoginForm onLogin={handleLogin} />
          {showError && <ErrorMessage />}
        </div>
      )}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
    </div>
  );
}

export default App;