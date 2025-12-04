import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home heading and paragraph', () => {
  render(<Home />);
  expect(screen.queryByText(/Bienvenido a la Aplicación/i)).toBeTruthy();
  expect(screen.queryByText(/Usa la navegación de arriba/i)).toBeTruthy();
});
