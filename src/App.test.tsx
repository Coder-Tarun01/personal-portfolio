import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Inti Tarun/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders education section', () => {
  render(<App />);
  const educationElement = screen.getByText(/Education/i);
  expect(educationElement).toBeInTheDocument();
});

test('renders skills section', () => {
  render(<App />);
  const skillsElement = screen.getByText(/Skills/i);
  expect(skillsElement).toBeInTheDocument();
});
