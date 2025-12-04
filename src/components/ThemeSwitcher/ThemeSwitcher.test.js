import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from '../../context/ThemeContext';

test('renders and toggles theme icon', () => {
  const { container } = render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );

  expect(container.innerHTML).toMatch(/<path/);

  const btn = screen.getByRole('button');
  fireEvent.click(btn);

  expect(container.innerHTML).toMatch(/<circle/);
});
