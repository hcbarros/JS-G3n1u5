import { render, screen } from '@testing-library/react';
import Home from './screens/home/home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Iniciar Jogo/i);
  expect(linkElement).toBeInTheDocument();
});
