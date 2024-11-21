import { useState, useRef, useEffect } from 'react';

export const useMenu = () => {
  const [isShowOptions, setShowOptions] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const dropMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setMenuVisible(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (
        isShowOptions &&
        dropMenuRef.current &&
        !dropMenuRef.current.contains(e.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleOutsideClose);
    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isShowOptions]);

  return {
    isShowOptions,
    setShowOptions,
    menuVisible,
    setMenuVisible,
    dropMenuRef,
  };
};