import React from 'react';
import { render } from '@testing-library/react';
import IconSun from './IconSun';

test('renders IconSun svg', () => {
  const { container } = render(<IconSun />);
  expect(container.querySelector('svg')).toBeTruthy();
});
