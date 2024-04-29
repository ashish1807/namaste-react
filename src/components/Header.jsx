import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
