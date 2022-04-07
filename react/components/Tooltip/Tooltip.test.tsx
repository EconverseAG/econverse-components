import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('should not be visible at first render', () => {
    const { getByText } = render(
      <Tooltip label="Tooltip example">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    const tooltip = getByText('Tooltip example');

    expect(tooltip).not.toBeVisible();
  });
  it('should be visible after mouse hovers', () => {
    const { getByText } = render(
      <Tooltip label="Tooltip example">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    const button = getByText('Hover me');
    const tooltip = getByText('Tooltip example');

    fireEvent.mouseEnter(button);
    expect(tooltip).toBeVisible();
  });
  it('should not be visible after mouse leaves', () => {
    const { getByText } = render(
      <Tooltip label="Tooltip example">
        <button type="button">Hover me</button>
      </Tooltip>,
    );

    const button = getByText('Hover me');
    const tooltip = getByText('Tooltip example');

    fireEvent.mouseEnter(button);
    expect(tooltip).toBeVisible();
    fireEvent.mouseLeave(button);
    expect(tooltip).not.toBeVisible();
  });
});
