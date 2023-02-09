import { renderHook, waitFor } from '@testing-library/react';
// Hooks
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('TEST: hooks/useFetchGifs', () => {
  test('Should return de initial state', () => {
    // Run hook function
    const { result } = renderHook(() => useFetchGifs('PlayStation'));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Should return gifs array and isLoading false', async () => {
    // Run hook function
    const { result } = renderHook(() => useFetchGifs('PlayStation'));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0), {
      // How much time must be wait
      timeout: 3000,
    });

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
