import type { IntlShape } from 'react-intl';

interface DeliveryWindow {
  startDateUtc: string;
  endDateUtc: string;
}

interface TranslatedEstimateProps {
  shippingEstimate: string;
  intl: IntlShape;
  isPickup?: boolean;
  lowerCase?: boolean;
  scheduled?: DeliveryWindow;
}

interface HardCodedEstimateParams {
  translateId: string;
  scheduledWindow: {
    date: string | null;
    startDate: string | null;
    endDate: string | null;
  };
  timeAmount: string;
}

export { TranslatedEstimateProps, DeliveryWindow, HardCodedEstimateParams };
