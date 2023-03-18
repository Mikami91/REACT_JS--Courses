import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
// Context
import { AuthContext } from '../../src/auth';
// Routes
import AppRouter from '../../src/routers/AppRouter';

describe('TEST: AppRouter', () => {
  test('Should navigate to public route if not authenticated', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <Router>
          <AppRouter />
        </Router>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getByText('Login Page')).toBeTruthy();
  });

  test('Should navigate to private route if authenticated', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: 'Nameless',
        id: 'ABC',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getByText('Publisher Page')).toBeTruthy();
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
