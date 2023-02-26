import { createBrowserRouter } from 'react-router-dom';
// Pages
import { About, Error, Login, Home } from '../pages';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      errorElement: <Error />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
  ]);

  return router;
};
