import { Route, Routes } from 'react-router-dom';
// Routes
import AuthRoutes from '../auth/routes/AuthRoutes';
import AppRoutes from '../app/routes/AppRoutes';

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/*' element={<AppRoutes />} />
    </Routes>
  );
};

export default MainRouter;
