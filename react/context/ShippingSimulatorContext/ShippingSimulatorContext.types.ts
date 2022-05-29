import type React from 'react';

interface Slas {
  friendlyName: string;
  id: string;
  price: number;
  shippingEstimate: string;
  shippingEstimateDate: string;
  __typename: string;
}

interface LogisticsInfo {
  itemIndex: string;
  slas: Slas[];
  __typename: string;
}

interface ShippingSimulatorContextType {
  postalCode: string;
  error: string;
  logisticsInfo: LogisticsInfo[];
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  hasError: boolean;
  isPostalCodeValid: boolean;
  updateShippingEstimates: () => Promise<void>;
}

interface ShippingSimulatorProviderProps {
  children: React.ReactNode;
}

export {
  ShippingSimulatorContextType,
  ShippingSimulatorProviderProps,
  LogisticsInfo,
  Slas,
};
