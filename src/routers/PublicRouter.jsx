import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { Home, Login } from '../auth';

const Public = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='home' element={<Home />} />
  </Routes>
);

const PublicRouter = ({ logged }) => {
  return !logged ? <Public /> : <Navigate to='/heroes' />;
};

export default PublicRouter;
