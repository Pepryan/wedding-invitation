import { Variants } from 'framer-motion';

export const scrollAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const fadeInAnimation: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
};

export const slideInFromLeft: Variants = {
  offscreen: {
    opacity: 0,
    x: -100
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const slideInFromRight: Variants = {
  offscreen: {
    opacity: 0,
    x: 100
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const viewportSettings = {
  once: true,
  amount: 0.3
};