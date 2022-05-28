interface ShippingSimulatorFormProps {
  children: React.ReactNode;
  customHandleSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    callback: (event: React.FormEvent<HTMLFormElement>) => void,
  ) => void;
}

export { ShippingSimulatorFormProps };
