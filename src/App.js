import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('Woooooooooooooooo!');
    const storeLoggedInValue = localStorage.getItem('isLoggedIn');
    if (storeLoggedInValue) {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We are saving isLoggedIn in localStorage.
    // So that we cannot loose this value as the page refresh.
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
