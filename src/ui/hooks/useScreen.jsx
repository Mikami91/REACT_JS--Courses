import { useEffect, useState } from 'react';

const useScreen = () => {
  const [screen, setScreen] = useState({
    isMobile: window.innerWidth < 700,
    isTablet: window.innerWidth > 700 && window.innerWidth < 1000,
    isDesktop: window.innerWidth > 1000,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = () => {
    setScreen({
      isMobile: window.innerWidth < 700,
      isTablet: window.innerWidth > 700 && window.innerWidth < 1000,
      isDesktop: window.innerWidth > 1000,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { ...screen };
};

export default useScreen;
