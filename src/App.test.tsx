import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('App displays initial text', () => {
  render(<App />);

  const h1 = screen.getByRole('heading', { name: 'react-rollup-boilerplate' });
  expect(h1).toBeInTheDocument();
});
