export const Animation = {
  slideUp: {
    initial: { y: "99.99%", opacity: 0},
    animate: { y: 0, opacity: 1 },
    exit: { y: 0, opacity: 1 },
  },
  slideDown: {
    initial: { y: 0, opacity: 1 },
    animate: { y: 100, opacity: 0 },
    exit: { y: 0, opacity: 1 },
  },
  slideUpExitDown: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
  },
  textSlideUpSkewY: {
    initial: { y: '100%', skewY: 10 },
    animate: { y: 0, skewY: 0 },
    exit: { y: '100%', skewY: 10 },
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
};
