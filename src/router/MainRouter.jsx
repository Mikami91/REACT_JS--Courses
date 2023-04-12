import { Navigate, Route, Routes } from 'react-router-dom';
// Routes
import AuthRoutes from '../auth/routes/AuthRoutes';
import AppRoutes from '../app/routes/AppRoutes';
// UI
import { CheckingAuth } from '../ui/components';
// Hooks
import { useCheckAuth } from '../hooks';

const MainRouter = () => {
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<AppRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};

export default MainRouter;
