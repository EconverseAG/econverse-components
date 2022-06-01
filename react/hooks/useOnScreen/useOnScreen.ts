import { useEffect, useMemo, useState } from 'react';

import type { UseOnScreenOptions } from './useOnScreen.types';

function useOnScreen(
  element: React.RefObject<HTMLElement>,
  options: UseOnScreenOptions,
) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const rootMargin = useMemo(() => {
    const { threshold = 0 } = options;

    return `${threshold}px 0px`;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { rootMargin },
    );

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element, rootMargin]);

  return isOnScreen;
}

export default useOnScreen;
