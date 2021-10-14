import { render, screen } from '@testing-library/react';
import { Component } from 'react';
import App from './App';
import Student from './student';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

