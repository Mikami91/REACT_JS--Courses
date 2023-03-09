import { Route, Routes } from 'react-router-dom';
// Pages
import { Home, Login } from '../auth';
import { Error } from '../ui';
// Routers
import HeroesRouter from '../heroes/routers/HeroesRouter';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='heroes/*' element={<HeroesRouter />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRouter;
