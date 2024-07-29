import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "../Home/Home";

// Mocking the Carousel component from react-bootstrap
jest.mock('react-bootstrap/Carousel', () => ({
  __esModule: true,
  default: () => <div>Carousel Component</div>,
}));

describe('Home component tests', () => {
  test('renders correctly', async () => {
    render(<Home />);
    // Check if the mocked Carousel component's text is in the document
    expect(await screen.findByText('Carousel Component')).toBeInTheDocument();
  });
});
