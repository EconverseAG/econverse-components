import React, { useEffect, useMemo, useState } from 'react';
import { injectIntl } from 'react-intl';

import type { TranslatedEstimateProps } from './TranslatedEstimate.types';

function TranslateEstimate({
  intl,
  isPickup,
  lowerCase,
  shippingEstimate,
  scheduled,
}: TranslatedEstimateProps) {
  const [message, setMessage] = useState('');

  const translateId = useMemo(() => {
    const shippingEstimateString = shippingEstimate?.split(/[0-9]+/)[1];

    return (
      shippingEstimate &&
      shippingEstimateString &&
      `shippingEstimate${isPickup ? 'Pickup' : ''}-${
        shippingEstimate.split(/[0-9]+/)[1]
      }`
    );
  }, [isPickup, shippingEstimate]);

  const timeAmount = useMemo(() => shippingEstimate?.split(/\D+/)[0], [
    shippingEstimate,
  ]);

  const scheduledWindow = useMemo(
    () =>
      scheduled?.startDateUtc && scheduled?.endDateUtc
        ? {
            date: intl.formatDate(scheduled.startDateUtc, {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }),
            startDate: intl.formatTime(scheduled.startDateUtc, {
              timeZone: 'UTC',
            }),
            endDate: intl.formatTime(scheduled.endDateUtc, {
              timeZone: 'UTC',
            }),
          }
        : {
            date: null,
            startDate: null,
            endDate: null,
          },
    [intl, scheduled],
  );

  useEffect(() => {
    if (scheduled) {
      const { date, startDate, endDate } = scheduledWindow;
      const hasDeliveryWindow = !!(startDate && endDate);
      const translatedEstimate = hasDeliveryWindow
        ? intl.formatMessage(
            {
              id: 'shippingEstimate-scheduled',
            },
            { date, startDate, endDate },
          )
        : intl.formatMessage({
            id: 'shippingEstimate-scheduled-no-dates',
          });

      setMessage(
        lowerCase ? translatedEstimate.toLowerCase() : translatedEstimate,
      );

      return;
    }

    let translatedEstimate = '';

    if (translateId && timeAmount && intl) {
      translatedEstimate = intl.formatMessage(
        { id: translateId },
        { timeAmount },
      );
    }

    if (lowerCase) {
      translatedEstimate = translatedEstimate.toLowerCase();
    }

    setMessage(translatedEstimate);
  }, [intl, lowerCase, scheduled, scheduledWindow, timeAmount, translateId]);

  return <>{message}</>;
}

export default injectIntl(TranslateEstimate);
