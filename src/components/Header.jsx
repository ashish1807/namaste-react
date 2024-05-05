import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Header = () => {
  const [buttonName, setButtonName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log('useEffect called');
  }, [buttonName]);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online status: {onlineStatus ? '✅' : '🔴'}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
