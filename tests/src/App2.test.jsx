import { render, screen } from '@testing-library/react';
import { App } from '../../src/App';

// Optimize

describe('TEST: App 2', () => {
  const title = 'Dark Souls II';
  const subtitle = '';

  test('Should make match with the snapshot', () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Should show the title at a h1', () => {
    render(<App title={title} subtitle={subtitle} />);

    // For show body render
    // screen.debug();

    expect(screen.getByText(title)).toBeTruthy();

    // If want not exist
    // expect(screen.getByText(subtitle)).not.toBeTruthy();
  });

  test('Should find element by role', () => {
    render(<App title={title} />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });
});
