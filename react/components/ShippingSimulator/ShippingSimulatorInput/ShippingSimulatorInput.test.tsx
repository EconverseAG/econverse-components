import React from 'react';
import { render, fireEvent } from '@vtex/test-tools/react';

import ShippingSimulatorForm from '../ShippingSimulatorForm';
import ShippingSimulatorProvider from '../../../ShippingSimulatorProvider';
import ShippingSimulatorInput from './ShippingSimulatorInput';

function renderInput() {
  return render(
    <ShippingSimulatorProvider>
      <ShippingSimulatorForm>
        <ShippingSimulatorInput />
      </ShippingSimulatorForm>
    </ShippingSimulatorProvider>,
  );
}

describe('ShippingSimulatorForm', () => {
  it('should be able to update the postal code', () => {
    const { getByTestId } = renderInput();

    const input = getByTestId('shippingSimulatorInput');

    fireEvent.change(input, { target: { value: '123' } });

    expect(input).toHaveValue('123');
  });
  it('should not allow letters', () => {
    const { getByTestId } = render(
      <ShippingSimulatorProvider>
        <ShippingSimulatorForm>
          <ShippingSimulatorInput />
        </ShippingSimulatorForm>
      </ShippingSimulatorProvider>,
    );

    const input = getByTestId('shippingSimulatorInput');

    fireEvent.change(input, { target: { value: '1b23a' } });

    expect(input).toHaveValue('123');
  });
  it('should format the postal code', () => {
    const { getByTestId } = renderInput();

    const input = getByTestId('shippingSimulatorInput');

    fireEvent.change(input, { target: { value: '11740000' } });

    expect(input).toHaveValue('11740-000');
  });
  it('should not allow more than 8 characters', () => {
    const { getByTestId } = renderInput();

    const input = getByTestId('shippingSimulatorInput');

    fireEvent.change(input, { target: { value: '123456789' } });

    expect(input).toHaveValue('12345-678');
  });
  it('should be able to receive a custom handleChange', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <ShippingSimulatorProvider>
        <ShippingSimulatorForm>
          <ShippingSimulatorInput customHandleChange={handleChange} />
        </ShippingSimulatorForm>
      </ShippingSimulatorProvider>,
    );

    const input = getByTestId('shippingSimulatorInput');

    fireEvent.change(input, { target: { value: '123' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
