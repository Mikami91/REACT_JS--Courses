import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { PageTitle } from '../../ui/components';
// Context
import { AuthContext } from '../context/';
// Hooks
import { useScreen } from '../../ui/hooks';

const Login = () => {
  const { login } = useContext(AuthContext);
  const { height } = useScreen();
  const navigate = useNavigate();
  const inputRef = useRef();

  const onLogin = (e) => {
    e.preventDefault();

    const username = inputRef.current.value || '';

    if (username.length < 2 || username.length > 20) return;

    const lastPath = localStorage.getItem('lastPath') || 'publisher';

    login(username.trim());

    navigate(lastPath, { replace: true });
  };

  return (
    <>
      <PageTitle title='Login Page' />

      <div className='container text-center'>
        <div
          style={{
            marginTop: `${height / 3.5}px`,
            marginBottom: `${height / 3.5}px`,
          }}
        >
          <form onSubmit={onLogin}>
            <div className='row justify-content-center mb-4'>
              <div className='col-xs-12 col-md-5 col-lg-3'>
                <input
                  type='text'
                  placeholder='Username'
                  className='form-control'
                  autoComplete='off'
                  ref={inputRef}
                />
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xs-12 col-md-5 col-lg-3'>
                <button
                  className='form-control btn btn-outline-success'
                  type='button'
                  onClick={onLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
