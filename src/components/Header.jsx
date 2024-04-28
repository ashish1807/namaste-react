import { useEffect, useState } from 'react';

export const Header = () => {
  const [buttonName, setButtonName] = useState('Login');

  useEffect(() => {
    console.log('useEffect called');
  }, [buttonName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login');
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
