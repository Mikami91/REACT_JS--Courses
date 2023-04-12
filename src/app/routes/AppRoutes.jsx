import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { Home } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
