// Components
import { Footer, Title } from '../src/ui';
// Routers
import AppRouter from '../src/routers/AppRouter';
// Providers
import { AuthProvider } from './auth';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Title text='Heroes App' />
        <AppRouter />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
