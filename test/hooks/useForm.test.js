import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('TEST: useForm', () => {
  const initialForm = {
    name: 'Mikami',
    email: 'example@gmail.com',
  };

  test('Should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    console.log(result);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('Should change name value from form', () => {
    const newValue = 'Nameless';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
  });

  test('Should reset form values', () => {
    const newValue = 'Nameless';
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
  });
});
