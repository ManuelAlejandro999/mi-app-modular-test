import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders Welcome with custom name and message', () => {
  render(<Welcome nombre="Desarrollador" />);
  expect(screen.queryByText(/Bienvenido, Desarrollador!/i)).toBeTruthy();
  expect(screen.queryByText(/¡Eres un crack!/i)).toBeTruthy();
});
