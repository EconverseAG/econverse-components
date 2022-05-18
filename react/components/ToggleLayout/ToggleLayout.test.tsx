import React from 'react';
import { render } from '@vtex/test-tools/react';

import ToggleLayout from './ToggleLayout';

test('should render children if enabled', () => {
  const { container } = render(<ToggleLayout enabled>Hello</ToggleLayout>);

  expect(container.innerHTML).toBe('Hello');
});

test('should not render children if disabled', () => {
  const { container } = render(
    <ToggleLayout enabled={false}>Hello</ToggleLayout>,
  );

  expect(container.innerHTML).toBe('');
});
