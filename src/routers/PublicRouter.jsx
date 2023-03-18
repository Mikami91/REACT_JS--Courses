import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { Home, Login } from '../auth';
import { Error } from '../ui';

const Public = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='home' element={<Home />} />
    <Route path='*' element={<Error />} />
  </Routes>
);

const PublicRouter = ({ logged }) => {
  return !logged ? <Public /> : <Navigate to='/publisher' />;
};

export default PublicRouter;
