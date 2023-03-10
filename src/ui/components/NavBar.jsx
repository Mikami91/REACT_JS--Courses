import { useContext } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
// Components
import TogglerButton from './TogglerButton';
import TogglerLink from './TogglerLink';
// Context
import { AuthContext } from '../../auth';
// Hooks
import { useScreen } from '../hooks';

const NavBar = () => {
  const { isMobile } = useScreen();
  const { user, logout } = useContext(AuthContext);

  const { name } = typeof user === 'object' ? user : JSON.parse(user);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <>
      <div id='header' className='navbar navbar-expand-sm sticky-top'>
        <div className='container-fluid'>
          {isMobile && (
            <span id='user' className='navbar-brand fw-bold'>
              {name}
            </span>
          )}

          <TogglerButton />

          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='navbar-nav me-auto'>
              <TogglerLink text='Publisher' to='/publisher' />
              <TogglerLink text='DC' to='dc' />
              <TogglerLink text='Marvel' to='marvel' />
              <TogglerLink text='Search' to='search' />
              {isMobile && (
                <button
                  className='btn btn-outline-danger text-center mt-3 mb-3'
                  onClick={onLogout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          <div className='navbar-collapse collapse justify-content-end'>
            <span id='user' className='navbar-brand fw-bold'>
              {name}
            </span>
            <button className='btn btn-outline-danger' onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
