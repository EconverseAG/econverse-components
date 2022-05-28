import type React from 'react';

interface ShippingSimulatorContextType {
  postalCode: string;
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
}

interface ShippingSimulatorProviderProps {
  children: React.ReactNode;
}

export { ShippingSimulatorContextType, ShippingSimulatorProviderProps };
