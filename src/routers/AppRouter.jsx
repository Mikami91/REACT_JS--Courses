import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
// Context
import { AuthContext } from '../auth';
// Pages
import { Error } from '../ui';
// Routers
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  const { logged } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path='/*' element={<PublicRouter logged={logged} />} />
        <Route path='publisher/*' element={<PrivateRouter logged={logged} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRouter;
