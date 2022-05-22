import React from 'react';
import { Utils } from 'vtex.checkout-resources';
import { useCssHandles } from 'vtex.css-handles';

import useCheckout from '../../hooks/useCheckout';
import CSS_HANDLES from './CheckoutButton.handles';
import type { CheckoutButtonProps } from './CheckoutButton.types';

function CheckoutButton({
  finishShoppingButtonLink,
  message,
  classes,
}: CheckoutButtonProps) {
  const { handles } = useCssHandles(CSS_HANDLES, { classes });
  const { url: checkoutUrl } = Utils.useCheckoutURL();
  const goToCheckout = useCheckout();

  return (
    <button
      className={handles['e-checkoutButton']}
      onClick={() => goToCheckout(finishShoppingButtonLink ?? checkoutUrl)}
    >
      {message ?? 'Finalizar compra'}
    </button>
  );
}

export default CheckoutButton;
