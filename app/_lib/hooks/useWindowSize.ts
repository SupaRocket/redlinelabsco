'use client';

import { scaleFactorsState } from '@/app/_state/atoms';
// hooks
import { useEffect, useState, useSyncExternalStore } from 'react';
import { useRecoilState } from 'recoil';

export function useWindow() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return window.innerWidth;
}

function getServerSnapshot() {
  return 0;
}

export function useWindowSize() {
  const width = useWindow();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [width]);

  return {
    width,
    height,
  };
}

export function useIsMobile() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 992);

  useEffect(() => {
    setIsMobile(width < 992);
  }, [width]);

  return isMobile;
}

export function useWindowScale() {
  const [scaleFactor, setScaleFactor] = useRecoilState(scaleFactorsState);

  useEffect(() => {
    const updateScaleFactor = () => {
      setScaleFactor(window.devicePixelRatio || 1);
    };

    updateScaleFactor();
    window.addEventListener('resize', updateScaleFactor);

    return () => {
      window.removeEventListener('resize', updateScaleFactor);
    };
  }, [setScaleFactor]);

  return scaleFactor;
}
