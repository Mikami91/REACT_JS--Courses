import { render, screen } from '@testing-library/react';
// Components
import GifGrid from '../../src/components/GifGrid';
// Hooks
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('TEST: <GifGrid />', () => {
  const category = 'Saint Seiya';

  test('Should show loading when initializing', () => {
    // Run hook function
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByRole('img')).toBeTruthy();
    expect(screen.getByText(category));
  });

  test('Should show items when images load by useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Mikami',
        url: 'https://example/mikami.png',
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    // Plus loading <img /<
    expect(screen.getAllByRole('img').length).toBe(2);
    // screen.debug();
  });
});
