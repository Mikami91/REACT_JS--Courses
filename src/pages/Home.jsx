import { useContext } from 'react';
// Contexts
import { UserContext } from '../context/UserContext';

const setData = {
  game: 'Elden Ring',
  release: '25-02-2022',
  genre: 'RPG',
  developer: 'From Software',
  director: 'Hidetaka Miyazaki',
};

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='container-fluid align-items-center'>
      <h2>Home Page</h2>
      <br />
      <button className='btn btn-info' onClick={() => setUser(setData)}>
        Update Data
      </button>
      <pre aria-label='pre' style={{ color: '#e57fb2' }}>
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  );
};

export default Home;
