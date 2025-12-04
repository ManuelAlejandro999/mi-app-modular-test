jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ children, to }) => React.createElement('a', { href: to || '#' }, children),
    MemoryRouter: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Err404 from './Err404';

test('renders 404 page content', () => {
  render(<Err404 />);
  expect(screen.queryByText(/Página no encontrada/i)).toBeTruthy();
  expect(screen.queryByText(/Volver al inicio/i)).toBeTruthy();
});
