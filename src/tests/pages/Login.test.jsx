import { fireEvent, render, screen } from '@testing-library/react';
// Pages
import Login from '../../pages/Login';
// Contexts
import { UserContext } from '../../context/UserContext';

describe('TEST: <Login />', () => {
  test('Should show the component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Login />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should called setUser when the button is clicked', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <Login />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith({
      game: 'Dark Souls',
      release: '04-10-2011',
      genre: 'Rol Action',
      developer: 'From Software',
      director: 'Hidetaka Miyazaki',
    });
  });
});
