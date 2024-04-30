import { GifItem } from '../../src/components/GifItem';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
describe('GifItem', () => {
  const title = 'Demo title';
  const url = 'http://demo.url.com/img.jpg';
  it('should do match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  it('should render img with url ant alt', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  it('should render title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
