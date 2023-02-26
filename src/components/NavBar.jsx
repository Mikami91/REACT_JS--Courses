import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <ul className='nav nav-pills justify-content-center'>
        <li className='nav-item'>
          <NavLink to='/' className='nav-link'>
            Login
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/home' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default NavBar;
