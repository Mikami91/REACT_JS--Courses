import { render, screen } from '@testing-library/react';
// Pages
import Home from '../../pages/Home';
// Contexts
import { UserContext } from '../../context/UserContext';

describe('TEST: <Home/>', () => {
  const user = {
    id: 1,
    name: 'Mikami',
  };

  test('Should show the component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Home />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should show the component with user', () => {
    render(
      <UserContext.Provider value={{ user}}>
        <Home />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
  });
});
