import { Utils } from 'vtex.checkout-resources';
import { useRuntime } from 'vtex.render-runtime';

function useCheckout() {
  const { url: checkoutUrl, major } = Utils.useCheckoutURL();
  const { navigate, rootPath = '' } = useRuntime();

  const goToCheckout = (url: string) => {
    if (major > 0 && url === checkoutUrl) {
      navigate({ to: url });
    } else {
      window.location.href = `${rootPath}${url}`;
    }
  };

  return goToCheckout;
}

export default useCheckout;
