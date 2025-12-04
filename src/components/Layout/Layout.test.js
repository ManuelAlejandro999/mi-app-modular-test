jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ children, to }) => React.createElement('a', { href: to || '#' }, children),
    Outlet: () => null,
    MemoryRouter: ({ children }) => React.createElement(React.Fragment, null, children),
    Routes: ({ children }) => React.createElement(React.Fragment, null, children),
    Route: () => null,
  };
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { ThemeProvider } from '../../context/ThemeContext';

test('renders Header inside Layout', () => {
  render(
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );

  expect(screen.queryByText(/Mi App/i)).toBeTruthy();
});
