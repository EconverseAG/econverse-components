import type { CssHandlesTypes } from 'vtex.css-handles';

import type CSS_HANDLES from './CheckoutButton.handles';

interface CheckoutButtonProps {
  finishShoppingButtonLink?: string;
  message?: string;
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>;
}

export { CheckoutButtonProps };
