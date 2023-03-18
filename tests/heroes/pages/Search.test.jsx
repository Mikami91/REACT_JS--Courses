import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// Pages
import { Search } from '../../../src/heroes/pages';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('TEST: <Search />', () => {
  beforeEach(() => jest.clearAllMocks());

  test('Should show with correct components', () => {
    const { constainer } = render(
      <MemoryRouter initialEntries={['/publisher/search']}>
        <Search />
      </MemoryRouter>
    );

    screen.debug();

    expect(constainer).toMatchSnapshot();
  });

  test('Should show hero info', () => {
    render(
      <MemoryRouter initialEntries={['/publisher/search?q=batman']}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    const img = screen.getByRole('img');

    expect(input.value).toBe('batman');
    expect(img.src).toContain('/heroes/dc-batman.jpg');

    screen.debug();
  });

  test('Should show error if not find a hero', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/publisher/search?q=mikami']}>
        <Search />
      </MemoryRouter>
    );

    const child = container.getElementsByClassName('alert-danger');

    expect(child.length).toBe(1);
  });

  test('Should call the navigate to hero page', () => {
    render(
      <MemoryRouter initialEntries={['/publisher/search']}>
        <Search />
      </MemoryRouter>
    );

    const inputValue = 'spiderman';

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { name: 'searchText', value: inputValue },
    });

    fireEvent.submit(input);

    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
