import { Route, Routes } from 'react-router-dom';
// Components
import { Footer, NavBar, Title } from './components';
// Providers
import { UserProvider } from './context/UserProvider';
// Routes
import routes from './routers/routes';

const App = () => {
  return (
    <UserProvider>
      <Title />
      <NavBar />
      <Routes>
        {routes.map((i, key) => (
          <Route
            key={key}
            path={i.path ? i.path : '*'}
            element={<i.component />}
          />
        ))}
      </Routes>
      <Footer />
    </UserProvider>
  );
};

export default App;
