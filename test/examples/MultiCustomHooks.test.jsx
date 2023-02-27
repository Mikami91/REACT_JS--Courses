import { fireEvent, render, screen } from '@testing-library/react';
// Component
import MultiCustomHooks from '../../src/examples/MultiCustomHooks';
// Hooks
import useFetch from '../../src/hooks/useFetch';
import useCounter from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('TEST: <MultiCustomHooks', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  // To reset all mock released
  beforeEach(() => jest.clearAllMocks());

  const returnValue = [{ autor: 'Mikami', quote: 'Hello World' }];

  test('Should show default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultiCustomHooks />);

    expect(screen.getByText('By Mikami'));

    const prevButton = screen.getByRole('button', { name: 'Prev Page' });
    expect(prevButton.disabled).toBeTruthy();
  });

  test('Should show quote', () => {
    useFetch.mockReturnValue({
      data: returnValue,
      isLoading: false,
      hasError: null,
    });

    render(<MultiCustomHooks />);
    expect(screen.getByText('Rick and Morty')).toBeTruthy();
  });

  test('Should call increment function', () => {
    useFetch.mockReturnValue({
      data: returnValue,
      isLoading: false,
      hasError: null,
    });

    render(<MultiCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next Page' });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
    screen.debug();
  });
});
