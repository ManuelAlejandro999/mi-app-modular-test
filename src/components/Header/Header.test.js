jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: ({ children, to }) => React.createElement('a', { href: to || '#' }, children),
  };
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Componente Header', () => {

  test('debe renderizar el título de la aplicación', () => {
    render(<Header />);
    const titulo = screen.getByText(/Mi App/i);
    expect(titulo).toBeTruthy();
  });

  test('debe tener un rol de "banner"', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeTruthy();
  });

});