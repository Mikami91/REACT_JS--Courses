import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// App
import App from '../App';

describe('TEST: <App />', () => {
  test('Should show the login page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Login Page')).toBeTruthy();
  });

  test('Should show the home page', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeTruthy();
  });
});
