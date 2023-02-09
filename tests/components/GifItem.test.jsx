import { render, screen } from '@testing-library/react';
// Components
import GifItem from '../../src/components/GifItem';

describe('TEST: <GifItem />', () => {
  const title = 'Dark Souls';
  const url = 'https://example.com/';

  test('Should make match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Should show gif with URL and ALT set it', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Should show the title in the component ', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
