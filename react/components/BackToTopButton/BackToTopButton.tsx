import React, { useState, useEffect, useCallback } from 'react';
import { Icon } from 'vtex.store-icons';
import { useCssHandles } from 'vtex.css-handles';

import Button from '../Button';
import type { BackToTopButtonProps } from './BackToTopButton.types';
import BackToTopButtonHandles from './BackToTopButton.handles';
import goBackToTop from '../../utils/goBackToTop';

function BackToTopButton({
  displayThreshold = 600,
  text,
  classes,
  children,
}: BackToTopButtonProps) {
  const [isShowed, setIsShowed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const { handles } = useCssHandles(BackToTopButtonHandles, { classes });

  const updateScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  }, [updateScroll]);

  useEffect(() => {
    setIsShowed(scrollY > displayThreshold);
  }, [scrollY, displayThreshold]);

  return (
    <>
      {isShowed && (
        <div
          className={`${handles.backToTopButtonContainer} z-999 fixed bottom-2 right-2`}
        >
          <Button onClick={goBackToTop}>
            {text ?? children ?? <Icon id="nav-caret--up" size="16" />}
          </Button>
        </div>
      )}
    </>
  );
}

export default BackToTopButton;
