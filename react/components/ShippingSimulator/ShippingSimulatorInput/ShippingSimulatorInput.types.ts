interface ShippingSimulatorInputProps {
  placeholder?: string;
  customHandleChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ) => void;
}

export { ShippingSimulatorInputProps };
