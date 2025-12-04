const React = require('react');

module.exports = {
  Link: ({ children, to }) => React.createElement('a', { href: to || '#' }, children),
  MemoryRouter: ({ children }) => React.createElement(React.Fragment, null, children),
  Routes: ({ children }) => React.createElement(React.Fragment, null, children),
  Route: () => null,
  Outlet: () => null,
  useNavigate: () => () => {},
};
