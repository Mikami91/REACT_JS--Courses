import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../../src/CounterApp';

describe('TEST: CounterApp', () => {
  const initialValue = 0;

  test('Should make match with snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('Should show initial value: 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();

    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toContain(
      '100'
    );
  });

  test('Should increase value with button Add', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('1')).toBeTruthy();
  });

  test('Should decrease value with button Less', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('Less'));
    expect(screen.getByText('0')).toBeTruthy();
  });

  test('Test button Reset', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('Add'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText('0')).toBeTruthy();
  });
});
