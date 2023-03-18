import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
// Contexts
import { AuthContext } from '../../src/auth';
// Components
import { NavBar } from '../../src/ui';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('TEST: <NavBar />', () => {
  const contextValue = {
    logged: true,
    user: {
      name: 'Nameless',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('Should show user name', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Nameless')).toBeTruthy();
  });

  test('Should call logout and navigate', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/', { replace: true });
  });
});
