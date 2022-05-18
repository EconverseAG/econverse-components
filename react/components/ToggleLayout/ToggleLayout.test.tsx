import React from 'react';
import { render } from '@vtex/test-tools/react';

import ToggleLayout from './ToggleLayout';

describe('ToggleLayout', () => {
  it('should render children if enabled', () => {
    const { container } = render(<ToggleLayout enabled>Hello</ToggleLayout>);

    expect(container.innerHTML).toBe('Hello');
  });

  it('should not render children if disabled', () => {
    const { container } = render(
      <ToggleLayout enabled={false}>Hello</ToggleLayout>,
    );

    expect(container.innerHTML).toBe('');
  });
});
