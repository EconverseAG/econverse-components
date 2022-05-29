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

export { TranslatedEstimateProps, DeliveryWindow };
