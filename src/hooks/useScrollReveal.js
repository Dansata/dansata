// useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import config from './scrollRevealConfig';

const useScrollReveal = (selector) => {
  useEffect(() => {
    ScrollReveal().reveal(selector, config);

    return () => ScrollReveal().destroy();
  }, [selector]);
};

export default useScrollReveal;
