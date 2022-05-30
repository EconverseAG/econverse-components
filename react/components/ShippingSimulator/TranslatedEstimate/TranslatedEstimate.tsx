import React, { useEffect, useMemo, useState } from 'react';
import { injectIntl } from 'react-intl';

import type {
  HardCodedEstimateParams,
  TranslatedEstimateProps,
} from './TranslatedEstimate.types';

function HardCodedEstimate({
  translateId,
  scheduledWindow,
  timeAmount,
}: HardCodedEstimateParams) {
  const timeAmountNumber = Number(timeAmount);
  const { date, startDate, endDate } = scheduledWindow;

  switch (translateId) {
    case 'shippingEstimate-bd':
      return timeAmountNumber > 0
        ? `Em até ${timeAmount} ${
            timeAmountNumber > 1 ? 'dias úteis' : 'dia útil'
          }`
        : 'No mesmo dia';

    case 'shippingEstimate-d':
      return timeAmountNumber > 0
        ? `Em até ${timeAmount} ${timeAmountNumber > 1 ? 'dias' : 'dia'}`
        : 'No mesmo dia';

    case 'shippingEstimate-scheduled':
      return `${date}, entre ${startDate} e ${endDate}`;

    case 'shippingEstimatePickup-bd':
      return timeAmountNumber > 0
        ? `Pronto em até ${timeAmount} ${
            timeAmountNumber > 1 ? 'dias úteis' : 'dia útil'
          }`
        : 'Pronto no mesmo dia';

    case 'shippingEstimatePickup-d':
      return timeAmountNumber > 0
        ? `Pronto em até ${timeAmount} ${timeAmountNumber > 1 ? 'dias' : 'dia'}`
        : 'Pronto no mesmo dia';

    default:
      return '';
  }
}

function TranslateEstimate({
  intl,
  isPickup,
  lowerCase,
  shippingEstimate,
  scheduled,
}: TranslatedEstimateProps) {
  const [message, setMessage] = useState('');

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

  const translateId = useMemo(() => {
    const shippingEstimateString = shippingEstimate?.split(/[0-9]+/)[1];

    if (scheduled) {
      const { startDate, endDate } = scheduledWindow;
      const hasDeliveryWindow = !!(startDate && endDate);

      return hasDeliveryWindow
        ? 'shippingEstimate-scheduled'
        : 'shippingEstimate-scheduled-no-dates';
    }

    return (
      shippingEstimate &&
      shippingEstimateString &&
      `shippingEstimate${isPickup ? 'Pickup' : ''}-${
        shippingEstimate.split(/[0-9]+/)[1]
      }`
    );
  }, [isPickup, scheduled, scheduledWindow, shippingEstimate]);

  const timeAmount = useMemo(() => shippingEstimate?.split(/\D+/)[0], [
    shippingEstimate,
  ]);

  useEffect(() => {
    if (scheduled) {
      const { date, startDate, endDate } = scheduledWindow;
      const hasDeliveryWindow = !!(startDate && endDate);
      const translatedEstimate = hasDeliveryWindow
        ? intl.formatMessage(
            {
              id: translateId,
            },
            { date, startDate, endDate },
          )
        : intl.formatMessage({
            id: translateId,
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

  return (
    <>
      {message === translateId
        ? HardCodedEstimate({ translateId, timeAmount, scheduledWindow })
        : message}
    </>
  );
}

export default injectIntl(TranslateEstimate);
