import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDirectory from './UserDirectory';

test('renders UserDirectory', async () => {
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve([]) }));
  render(<UserDirectory />);
  expect(await screen.findByText(/Directorio de Usuarios/i)).toBeTruthy();
});
