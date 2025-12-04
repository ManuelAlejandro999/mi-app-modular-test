import React from 'react';
import { render } from '@testing-library/react';
import IconMoon from './IconMoon';

test('renders IconMoon svg', () => {
  const { container } = render(<IconMoon />);
  expect(container.querySelector('svg')).toBeTruthy();
});
