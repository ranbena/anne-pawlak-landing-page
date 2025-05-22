import { useEffect, useState } from 'react';

export const useIsIOS = (): boolean | undefined => {
  const [isIOS, setIsIOS] = useState<boolean>();

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);
  }, []);

  return isIOS;
};
