import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Header = () => {
  const [buttonName, setButtonName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
  }, [buttonName]);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg items-center">
      <div className="logo-container">
        <Link to="/">
          <img className="w-[150px]" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online status: {onlineStatus ? '✅' : '🔴'}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
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
