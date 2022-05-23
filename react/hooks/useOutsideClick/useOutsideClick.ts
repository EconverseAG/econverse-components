import type React from 'react';
import { useCallback, useEffect } from 'react';

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: (e: Event) => void,
) {
  const handleClick = useCallback(
    (e) => {
      if (ref?.current?.contains(e.target)) return;

      callback(e);
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });
}

export default useOutsideClick;
