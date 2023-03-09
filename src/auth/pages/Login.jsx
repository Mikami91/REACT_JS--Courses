import { NavLink } from 'react-router-dom';
// Hooks
import { useScreen } from '../../ui/hooks';

const Login = () => {
  const { height } = useScreen();

  return (
    <>
      <h1>Login Page</h1>

      <div className='container text-center'>
        <div style={{ marginTop: `${height / 3}px` }}>
          <NavLink className='btn btn-outline-success' to='heroes'>
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
