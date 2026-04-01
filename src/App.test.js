import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main hero badge', () => {
  render(<App />);
  const successBadge = screen.getByText(/Trusted by 80\+ clients since 2017/i);
  expect(successBadge).toBeInTheDocument();
});
