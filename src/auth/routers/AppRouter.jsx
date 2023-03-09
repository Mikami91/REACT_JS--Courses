import { Route, Routes } from 'react-router-dom';
// Routes
import routes from './routes';

const AppRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((i, key) => (
          <Route
            key={key}
            path={i.path ? i.path : '*'}
            element={<i.component />}
          />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;
