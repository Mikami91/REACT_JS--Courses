import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';

describe('TEST: <App />', () => {
  const newCategory = 'PlayStation';

  test('Should Add new categories', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); // Add PlayStation

    fireEvent.input(input, { target: { value: newCategory + '2' } });
    fireEvent.submit(form); // Add PlayStation2

    fireEvent.input(input, { target: { value: newCategory + '3' } });
    fireEvent.submit(form); // Add PlayStation3

    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(3);
  });

  test('Should not add a repeated category', () => {
    // Validate alert in the test
    global.alert = jest.fn();

    render(<App />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); // Add PlayStation

    // Try add PlayStation again
    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); // Add PlayStation

    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(1);
  });
});
