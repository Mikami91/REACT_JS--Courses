import { act, renderHook } from '@testing-library/react';
import useCounter from '../../src/hooks/useCounter';

describe('TEST: useCounter', () => {
  test('Should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(0);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Should return 100 value', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Should increment value', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => {
      increment();
      increment(10);
    });
    expect(result.current.counter).toBe(11);
  });

  test('Should decrement value', () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    act(() => {
      decrement();
      //   decrement(10);
    });
    expect(result.current.counter).toBe(9);
  });

  test('Should reset value', () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;
    act(() => {
      increment(100);
      reset();
    });
    expect(result.current.counter).toBe(0);
  });
});
