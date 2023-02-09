import { fireEvent, render, screen } from '@testing-library/react';
// Components
import InputSearch from '../../src/components/InputSearch';

describe('TEST: <InputSearch />', () => {
  test('Should change the value of the input', () => {
    render(<InputSearch onAddCategory={() => {}} />);

    const component = screen.getByRole('textbox');

    fireEvent.input(component, { target: { value: 'PlayStation' } });

    expect(component.value).toBe('PlayStation');
  });

  test('Should call onAddCategory if input has value', () => {
    const inputValue = 'Rocket League';
    const onAddCategory = jest.fn();

    render(<InputSearch onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test('Should not call onAddCategory if inputValue is empty', () => {
    const onAddCategory = jest.fn();
    render(<InputSearch onAddCategory={onAddCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalledTimes(1);
  });
});
