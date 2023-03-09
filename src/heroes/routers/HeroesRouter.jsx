import { Route, Routes } from 'react-router-dom';
// Components
import { NavBar, Error } from '../../ui';
// Pages
import { Heroes, DC, Marvel, Search, Hero } from '../pages';

const HeroesRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Heroes />} />
        <Route path='dc' element={<DC />} />
        <Route path='marvel' element={<Marvel />} />
        <Route path='search' element={<Search />} />
        <Route path='hero/:id' element={<Hero />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default HeroesRouter;
