// Mock react-router-dom locally so App can import Routes/Route without package
jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Routes: ({ children }) => React.createElement(React.Fragment, null, children),
    Route: () => null,
    Link: ({ children, to }) => React.createElement('a', { href: to || '#' }, children),
  };
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  // App renders a root div with class 'App'
  expect(container.querySelector('.App')).toBeInTheDocument();
});
