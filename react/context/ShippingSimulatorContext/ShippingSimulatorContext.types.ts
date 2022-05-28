import type React from 'react';

interface ShippingSimulatorContextType {
  postalCode: string;
  error: string;
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  hasError: boolean;
}

interface ShippingSimulatorProviderProps {
  children: React.ReactNode;
}

export { ShippingSimulatorContextType, ShippingSimulatorProviderProps };
