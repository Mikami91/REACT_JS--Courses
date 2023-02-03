import { render } from '@testing-library/react';
import { App } from '../../src/App';

describe('TEST: App', () => {
  test('Should make match with the snapshot', () => {
    const title = 'Dark Souls';
    const { container } = render(<App title={title} />);
    // console.log(container);
    expect(container).toMatchSnapshot();
  });

  test('Should show the title at a h1', () => {
    const title = 'Dark Souls';
    const { container, getByText, getByTestId } = render(<App title={title} />);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toBe(title);
    expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toBeTruthy();
  });
});
