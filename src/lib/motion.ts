export const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const slideInLeft = {
  initial: { x: -40, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const slideInRight = {
  initial: { x: 40, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};
