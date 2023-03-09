import { Link, NavLink, useNavigate } from 'react-router-dom';
// Components
import TogglerButton from './TogglerButton';
import TogglerLink from './TogglerLink';
// Hooks
import { useScreen } from '../hooks';

const NavBar = () => {
  let navigate = useNavigate();
  const { isMobile } = useScreen();

  const onLogout = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      <nav className='navbar navbar-expand-sm'>
        <div className='container-fluid'>
          <Link id='user' className='navbar-brand' to='/heroes'>
            Heroes
          </Link>

          <TogglerButton />

          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='navbar-nav me-auto'>
              <TogglerLink text='DC' to='dc' />
              <TogglerLink text='Marvel' to='marvel' />
              <TogglerLink text='Search' to='search' />
              {isMobile ? (
                <Link className='navbar-brand text-danger' to='/'>
                  Logout
                </Link>
              ) : null}
            </div>
          </div>

          <div
            className='navbar-collapse collapse justify-content-end'
            onClick={onLogout}
          >
            <NavLink className='btn btn-outline-danger' replace>
              Logout
            </NavLink>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default NavBar;
