import { useContext } from 'react';
// Contexts
import { UserContext } from '../context/UserContext';

const setData = {
  game: 'Dark Souls',
  release: '04-10-2011',
  genre: 'Rol Action',
  developer: 'From Software',
  director: 'Hidetaka Miyazaki',
};

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='container-fluid align-items-center'>
      <h2>Login Page</h2>
      <br />
      <button className='btn btn-success' onClick={() => setUser(setData)}>
        Set Data
      </button>
      <pre aria-label='pre' style={{ color: '#e57fb2' }}>
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  );
};

export default Login;
