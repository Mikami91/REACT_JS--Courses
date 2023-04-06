// Components
import { Footer } from './components';
// Router
import MainRouter from './router/MainRouter';
// Theme
import { AppTheme } from './theme';

const App = () => {
  return (
    <AppTheme>
      <MainRouter />
      {/* <Footer /> */}
    </AppTheme>
  );
};

export default App;
