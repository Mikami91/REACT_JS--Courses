import { useContext } from 'react';
// Contexts
import { UserContext } from '../context/UserContext';

const About = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='container-fluid align-items-center'>
      <h2>About Page</h2>
      <br />
      <button className='btn btn-danger' onClick={() => setUser()}>
        Delete Data
      </button>
      <pre style={{ color: '#e57fb2' }}>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default About;
