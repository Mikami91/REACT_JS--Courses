import { render, screen } from '@testing-library/react';
// App
import App from '../src/App';
// Hooks
import { useTodo } from '../src/hooks';

jest.mock('../src/hooks/useTodo.js');

describe('TEST: <App />', () => {
  const todos = [
    {
      id: 1,
      description: 'Des 1',
      done: false,
    },
    {
      id: 2,
      description: 'Des 2',
      done: true,
    },
  ];

  useTodo.mockReturnValue({
    state: todos,
    onAddTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
  });

  test('Should show the component correctly', () => {
    render(<App />);

    expect(screen.getByText('Des 1')).toBeTruthy();
    expect(screen.getByText('Des 2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
