// Components
import { Footer, NavBar, Title } from '../src/ui';
// Routers
import AppRouter from '../src/routers/AppRouter';

const App = () => {
  return (
    <>
      <Title text='Heroes App' />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
