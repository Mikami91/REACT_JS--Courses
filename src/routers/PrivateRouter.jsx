import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// Router
import HeroesRouter from '../heroes/routers/HeroesRouter';

const PrivateRouter = ({ logged }) => {
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;

  useMemo(() => {
    localStorage.setItem('lastPath', lastPath);
  }, [lastPath]);

  return logged ? <HeroesRouter /> : <Navigate to='/' />;
};

export default PrivateRouter;
